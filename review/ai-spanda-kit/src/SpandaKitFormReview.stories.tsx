import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Checkbox, InputField, SelectField, TextareaField } from './SpandaKit';
import './spanda-kit.css';

const meta = { title: 'AI Spanda Form Review' } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const InputErrorAssociation: Story = {
  render: () => <><InputField id="review-email" label="Email" type="email" name="email" required aria-invalid="true" aria-describedby="review-email-error" /><p id="review-email-error">Enter a valid email address.</p></>,
  play: async ({ canvas }) => {
    const field = canvas.getByRole('textbox', { name: /email/i });
    await expect(field).toBeRequired();
    await expect(field).toBeInvalid();
    await expect(field).toHaveAccessibleDescription('Enter a valid email address.');
  },
};

export const TextareaErrorAssociation: Story = {
  render: () => <><TextareaField id="review-notes" label="Notes" required aria-invalid="true" aria-describedby="review-notes-error" /><p id="review-notes-error">Add a note.</p></>,
  play: async ({ canvas }) => {
    const field = canvas.getByRole('textbox', { name: /notes/i });
    await expect(field).toBeRequired();
    await expect(field).toBeInvalid();
    await expect(field).toHaveAccessibleDescription('Add a note.');
  },
};

export const DisabledControlFormData: Story = {
  render: () => <form aria-label="Review form"><Checkbox label="Send updates" name="updates" value="yes" defaultChecked disabled /><SelectField id="review-select" label="Format" name="format" options={['Brief', 'Detailed']} defaultValue="Detailed" disabled /></form>,
  play: async ({ canvas }) => {
    const form = canvas.getByRole('form', { name: 'Review form' }) as HTMLFormElement;
    const data = new FormData(form);
    await expect(data.has('updates')).toBe(false);
    await expect(data.has('format')).toBe(false);
  },
};
