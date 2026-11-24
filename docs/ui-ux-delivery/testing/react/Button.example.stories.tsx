// Illustrative stories. Adapt the import, accessible name and criteria to the project's real component.
// Needs Storybook 9 or later (imports from storybook/test). Replace @storybook/react-vite with the project's framework package.
// Play functions use simulated events; check native browser behavior (dialog Escape, select menus) in a real browser.
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import { Button } from '../../examples/react/Button';

const meta = {
  component: Button,
  args: { children: 'Run example', onClick: fn() },
  // Fail on automated accessibility violations instead of relying on the project default.
  parameters: { a11y: { test: 'error' } },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const KeyboardActivation: Story = {
  play: async ({ canvas, userEvent, args }) => {
    const button = canvas.getByRole('button', { name: 'Run example' });
    await userEvent.tab();
    await expect(button).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    await userEvent.keyboard(' ');
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  },
};

export const PointerActivation: Story = {
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Run example' }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

// If the project's button stays focusable when disabled by design (aria-disabled), change this criterion and record why.
export const DisabledIsSkipped: Story = {
  args: { disabled: true },
  decorators: [(Story) => (<><button type="button">Before</button><Story /><button type="button">After</button></>)],
  play: async ({ canvas, userEvent, args }) => {
    await userEvent.tab();
    await expect(canvas.getByRole('button', { name: 'Before' })).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole('button', { name: 'After' })).toHaveFocus();
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};
