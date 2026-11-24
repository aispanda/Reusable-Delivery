// Neutral visual examples with focused checks. Simulated events do not cover native behavior:
// closing the dialog with Escape and opening the select menu by keyboard need a real browser or manual check.
import { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Button } from './Button';

const meta = { title: 'Examples/Components' } satisfies Meta;
export default meta;
type Story = StoryObj;

export const Buttons: Story = {
  render: () => (<div className="ex-row"><Button>Save changes</Button><Button variant="secondary">Cancel</Button><Button disabled>Unavailable</Button></div>),
  play: async ({ canvas }) => { await expect(canvas.getByRole('button', { name: 'Unavailable' })).toBeDisabled(); },
};
export const TextFieldWithError: Story = {
  render: () => (<div className="ex-field"><label className="ex-label" htmlFor="email">Email address</label><p className="ex-hint" id="email-hint">We use this only for project updates.</p><input className="ex-input" id="email" name="email" type="email" defaultValue="name@example" aria-invalid="true" aria-describedby="email-hint email-error" required /><p className="ex-error" id="email-error">Enter an email address in the format name@example.com.</p></div>),
  play: async ({ canvas }) => { const input = canvas.getByLabelText('Email address'); await expect(input).toBeInvalid(); await expect(input).toHaveAccessibleDescription('We use this only for project updates. Enter an email address in the format name@example.com.'); },
};
export const Checkboxes: Story = {
  render: () => (<fieldset className="ex-fieldset"><legend className="ex-label">Notify me about</legend><label className="ex-check"><input type="checkbox" name="notify" value="releases" /> New releases</label><label className="ex-check"><input type="checkbox" name="notify" value="reviews" defaultChecked /> Review requests</label><label className="ex-check"><input type="checkbox" name="notify" value="archive" disabled /> Archived projects</label></fieldset>),
  play: async ({ canvas, userEvent }) => { const releases = canvas.getByRole('checkbox', { name: 'New releases' }); await userEvent.click(canvas.getByText('New releases')); await expect(releases).toBeChecked(); releases.focus(); await userEvent.keyboard(' '); await expect(releases).not.toBeChecked(); await expect(canvas.getByRole('checkbox', { name: 'Archived projects' })).toBeDisabled(); },
};
function SelectDemo() {
  const [value, setValue] = useState('support');
  return (<div className="ex-field"><label className="ex-label" htmlFor="use-case">Example use case</label><select className="ex-select" id="use-case" value={value} onChange={(event) => setValue(event.target.value)}><option value="support">Support tickets</option><option value="notes">Meeting notes</option></select><p className="ex-hint" role="status">Showing: {value === 'support' ? 'Support tickets' : 'Meeting notes'}</p></div>);
}
export const NativeSelect: Story = {
  render: () => <SelectDemo />,
  play: async ({ canvas, userEvent }) => { await userEvent.selectOptions(canvas.getByLabelText('Example use case'), 'notes'); await expect(canvas.getByRole('status')).toHaveTextContent('Showing: Meeting notes'); },
};
function DialogDemo() {
  const ref = useRef<HTMLDialogElement>(null);
  return (<><Button onClick={() => ref.current?.showModal()}>Delete draft</Button><dialog ref={ref} className="ex-dialog" aria-labelledby="dialog-title"><h2 id="dialog-title">Delete this draft?</h2><p>This removes the draft from your list.</p><div className="ex-row"><Button variant="secondary" onClick={() => ref.current?.close()}>Keep draft</Button><Button onClick={() => ref.current?.close()}>Delete</Button></div></dialog></>);
}
export const Dialog: Story = {
  render: () => <DialogDemo />,
  play: async ({ canvas, userEvent }) => { await userEvent.click(canvas.getByRole('button', { name: 'Delete draft' })); const dialog = canvas.getByRole('dialog', { name: 'Delete this draft?' }); await expect(dialog).toHaveAttribute('open'); await userEvent.click(canvas.getByRole('button', { name: 'Keep draft' })); await expect(dialog).not.toHaveAttribute('open'); },
};
