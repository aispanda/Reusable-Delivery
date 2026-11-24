import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import { Checkbox, InputField, LinkButton, PrimaryButton, RadioGroup, SecondaryButton, SelectField, TextareaField, Toggle } from './SpandaKit';

// Review batch 1: actions and form controls. Focused checks for the 24 November 2026 Claude review changes.
const meta = {
  title: 'AI Spanda Review/Actions and Forms',
  decorators: [(Story) => <div style={{ background: 'var(--sk-cream)', color: 'var(--sk-ink)', padding: 24 }}><Story /></div>],
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryAmberOffset: Story = {
  render: () => <><PrimaryButton>Start a project</PrimaryButton>{' '}<PrimaryButton disabled>Unavailable</PrimaryButton></>,
  play: async ({ canvas }) => {
    const enabled = getComputedStyle(canvas.getByRole('button', { name: 'Start a project' })).boxShadow;
    await expect(enabled).toContain('rgb(232, 160, 26)');
    await expect(getComputedStyle(canvas.getByRole('button', { name: 'Unavailable' })).boxShadow).toBe('none');
  },
};

const secondaryAction = fn();
export const SecondaryKeyboardAndDisabled: Story = {
  render: () => <><SecondaryButton onClick={secondaryAction}>View details</SecondaryButton>{' '}<SecondaryButton disabled onClick={secondaryAction}>Unavailable details</SecondaryButton></>,
  play: async ({ canvas, userEvent }) => {
    secondaryAction.mockClear();
    const button = canvas.getByRole('button', { name: 'View details' });
    await userEvent.tab();
    await expect(button).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    await userEvent.click(button);
    await expect(secondaryAction).toHaveBeenCalledTimes(3);
    await userEvent.tab();
    await expect(canvas.getByRole('button', { name: 'Unavailable details' })).not.toHaveFocus();
    await userEvent.click(canvas.getByRole('button', { name: 'Unavailable details' }));
    await expect(secondaryAction).toHaveBeenCalledTimes(3);
  },
};

export const LinkButtonAttributes: Story = {
  render: () => <LinkButton href="#details" className="custom-link" aria-describedby="link-note">Explore details</LinkButton>,
  play: async ({ canvas, userEvent }) => {
    const link = canvas.getByRole('link', { name: 'Explore details' });
    await expect(link).toHaveClass('sk-link', 'custom-link');
    await expect(link).toHaveAttribute('href', '#details');
    await expect(link).toHaveAttribute('aria-describedby', 'link-note');
    await userEvent.tab();
    await expect(link).toHaveFocus();
  },
};

export const InputHintAndError: Story = {
  render: () => <><InputField id="email" label="Email" type="email" required hint="Used only for project updates." error="Enter an email address like name@example.com." /><InputField id="plain" label="Plain" hint="No error here." /></>,
  play: async ({ canvas }) => {
    const email = canvas.getByLabelText(/^Email/);
    await expect(email).toBeInvalid();
    await expect(email).toHaveAccessibleDescription('Used only for project updates. Error: Enter an email address like name@example.com.');
    await expect(canvas.getByText(/^Error:/)).toBeVisible();
    await expect(getComputedStyle(email).borderTopColor).toBe('rgb(220, 38, 38)');
    const plain = canvas.getByLabelText('Plain');
    await expect(plain).not.toHaveAttribute('aria-invalid');
    await expect(plain).toHaveAccessibleDescription('No error here.');
  },
};

export const TextareaCallerDescriptionKept: Story = {
  render: () => <><p id="notes-policy">Do not include personal data.</p><TextareaField id="notes" label="Notes" aria-describedby="notes-policy" error="Add a note." /></>,
  play: async ({ canvas }) => {
    const notes = canvas.getByLabelText('Notes');
    await expect(notes).toBeInvalid();
    await expect(notes).toHaveAccessibleDescription('Do not include personal data. Error: Add a note.');
  },
};

export const SelectStableValues: Story = {
  render: () => <form aria-label="Use case form"><SelectField id="use-case" name="useCase" label="Use case" options={[{ label: 'Support tickets', value: 'support' }, { label: 'Meeting notes', value: 'notes' }]} /></form>,
  play: async ({ canvas, userEvent }) => {
    const select = canvas.getByLabelText('Use case');
    await userEvent.selectOptions(select, 'Meeting notes');
    await expect(select).toHaveValue('notes');
    await expect(new FormData(canvas.getByRole('form', { name: 'Use case form' }) as HTMLFormElement).get('useCase')).toBe('notes');
  },
};

const radioChange = fn();
export const RadioStates: Story = {
  render: () => <form aria-label="Radio form">
    <RadioGroup name="format" label="Choose a format" required defaultValue="brief" onChange={radioChange} options={[{ label: 'Brief', value: 'brief' }, { label: 'Detailed', value: 'detailed' }]} />
    <RadioGroup name="locked" label="Locked format" disabled options={['One', 'Two']} />
  </form>,
  play: async ({ canvas, userEvent }) => {
    radioChange.mockClear();
    const form = canvas.getByRole('form', { name: 'Radio form' }) as HTMLFormElement;
    await expect(canvas.getByRole('radio', { name: 'Brief' })).toBeChecked();
    await expect(canvas.getByRole('radio', { name: 'Brief' })).toBeRequired();
    await userEvent.click(canvas.getByRole('radio', { name: 'Detailed' }));
    await expect(radioChange).toHaveBeenCalledWith('detailed', expect.anything());
    await expect(new FormData(form).get('format')).toBe('detailed');
    await expect(canvas.getByRole('radio', { name: 'One' })).toBeDisabled();
    await expect(canvas.getByRole('radio', { name: 'Two' })).toBeDisabled();
  },
};

const toggleChange = fn();
export const ToggleStates: Story = {
  render: () => <form aria-label="Settings">
    <Toggle label="Email updates" name="updates" value="on" defaultChecked onChange={toggleChange} />
    <Toggle label="Beta features" name="beta" disabled />
  </form>,
  play: async ({ canvas, userEvent }) => {
    toggleChange.mockClear();
    const form = canvas.getByRole('form', { name: 'Settings' }) as HTMLFormElement;
    const updates = canvas.getByRole('switch', { name: 'Email updates' });
    await expect(updates).toBeChecked();
    await expect(new FormData(form).get('updates')).toBe('on');
    await userEvent.tab();
    await expect(updates).toHaveFocus();
    await userEvent.keyboard(' ');
    await expect(updates).not.toBeChecked();
    await expect(toggleChange).toHaveBeenCalledTimes(1);
    await expect(new FormData(form).has('updates')).toBe(false);
    await userEvent.tab();
    await expect(canvas.getByRole('switch', { name: 'Beta features' })).not.toHaveFocus();
    await expect(canvas.getByRole('switch', { name: 'Beta features' })).toBeDisabled();
  },
};

export const DisabledChoiceIsMuted: Story = {
  render: () => <><Checkbox label="Enabled option" /><Checkbox label="Disabled option" disabled /></>,
  play: async ({ canvas }) => {
    const enabled = getComputedStyle(canvas.getByText('Enabled option')).color;
    const disabled = getComputedStyle(canvas.getByText('Disabled option')).color;
    await expect(disabled).not.toBe(enabled);
    await expect(disabled).toBe('rgb(71, 90, 112)');
  },
};
