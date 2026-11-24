import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import * as K from './SpandaKit';

// Draft examples derived from the inventory; copy and styling are illustrative.
const meta = { title: 'AI Spanda Draft Kit', parameters: { layout: 'padded' }, decorators: [(Story) => <div style={{ background: 'var(--sk-cream)', color: 'var(--sk-ink)', padding: 24 }}><Story /></div>] } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const PrimaryButton: Story = { render: () => <K.PrimaryButton>Start a project</K.PrimaryButton> };
const primaryAction = fn();
export const PrimaryButtonInteraction: Story = {
  render: () => <K.PrimaryButton className="example-custom-class" onClick={primaryAction}>Start a project</K.PrimaryButton>,
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('button', { name: 'Start a project' });
    await expect(button).toHaveClass('sk-button', 'example-custom-class');
    await userEvent.tab();
    await expect(button).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    await userEvent.click(button);
    await expect(primaryAction).toHaveBeenCalledTimes(3);
  },
};
export const PrimaryButtonDisabled: Story = {
  render: () => <K.PrimaryButton disabled>Start a project</K.PrimaryButton>,
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('button', { name: 'Start a project' });
    await expect(button).toBeDisabled();
    await userEvent.tab();
    await expect(button).not.toHaveFocus();
  },
};
export const SecondaryButton: Story = { render: () => <K.SecondaryButton>View details</K.SecondaryButton> };
export const SecondaryButtonCustomClass: Story = { render: () => <K.SecondaryButton className="custom-example">View details</K.SecondaryButton>, play: async ({ canvas }) => { await expect(canvas.getByRole('button', {name:'View details'})).toHaveClass('sk-button', 'sk-secondary', 'custom-example'); } };
export const LinkButton: Story = { render: () => <K.LinkButton href="#example">Explore details</K.LinkButton> };
export const Card: Story = { render: () => <K.Card><h2>Example card</h2><p>Illustrative content for review.</p></K.Card> };
export const FeaturedCard: Story = { render: () => <K.FeaturedCard><h2>Featured example</h2><p>Illustrative content for review.</p></K.FeaturedCard> };
export const InputField: Story = { render: () => <K.InputField id="example-input" label="Name" />, play: async ({canvas,userEvent}) => { const input=canvas.getByLabelText('Name'); await userEvent.type(input,'Example'); await expect(input).toHaveValue('Example'); } };
export const InputForm: Story = { render: () => <form aria-label="Profile"><K.InputField id="profile-name" label="Name" name="name" required /></form>, play: async ({canvas,userEvent}) => { const field=canvas.getByLabelText(/Name/); await expect(field).toBeRequired(); await expect(canvas.getByText(/\(required\)/)).toBeVisible(); await userEvent.type(field,'Alex'); await expect(new FormData(canvas.getByRole('form',{name:'Profile'}) as HTMLFormElement).get('name')).toBe('Alex'); } };
export const Textarea: Story = { render: () => <K.TextareaField id="example-textarea" label="Notes" />, play: async ({canvas,userEvent}) => { const field=canvas.getByLabelText('Notes'); await userEvent.type(field,'First line{Enter}Second line'); await expect(field).toHaveValue('First line\nSecond line'); } };
export const TextareaForm: Story = { render: () => <form aria-label="Notes form"><K.TextareaField id="notes" label="Notes" name="notes" /></form>, play: async ({canvas,userEvent}) => { await userEvent.type(canvas.getByLabelText('Notes'),'Line one{Enter}Line two'); await expect(new FormData(canvas.getByRole('form',{name:'Notes form'}) as HTMLFormElement).get('notes')).toBe('Line one\nLine two'); } };
export const Dropdown: Story = { render: () => <K.SelectField id="example-select" label="Use case" options={['Support tickets', 'Meeting notes']} />, play: async ({canvas,userEvent}) => { const select=canvas.getByLabelText('Use case'); await userEvent.selectOptions(select,'Meeting notes'); await expect(select).toHaveValue('Meeting notes'); } };
export const DropdownDisabled: Story = { render: () => <K.SelectField id="disabled-select" label="Use case" options={['Support tickets']} disabled />, play: async ({canvas,userEvent}) => { const select=canvas.getByLabelText('Use case'); await expect(select).toBeDisabled(); await userEvent.tab(); await expect(select).not.toHaveFocus(); } };
export const Checkbox: Story = { render: () => <K.Checkbox label="Include a summary" />, play: async ({canvas,userEvent}) => { const box=canvas.getByRole('checkbox',{name:'Include a summary'}); await userEvent.click(box); await expect(box).toBeChecked(); await userEvent.keyboard(' '); await expect(box).not.toBeChecked(); } };
export const CheckboxDisabled: Story = { render: () => <K.Checkbox label="Include a summary" disabled />, play: async ({canvas,userEvent}) => { const box=canvas.getByRole('checkbox',{name:'Include a summary'}); await expect(box).toBeDisabled(); await userEvent.tab(); await expect(box).not.toHaveFocus(); } };
export const RadioButton: Story = { render: () => <K.RadioGroup name="example-radio" label="Choose a format" options={['Brief', 'Detailed']} />, play: async ({canvas,userEvent}) => { await userEvent.click(canvas.getByRole('radio',{name:'Brief'})); await userEvent.click(canvas.getByRole('radio',{name:'Detailed'})); await expect(canvas.getByRole('radio',{name:'Brief'})).not.toBeChecked(); await expect(canvas.getByRole('radio',{name:'Detailed'})).toBeChecked(); } };
export const RadioFormValue: Story = { render: () => <form aria-label="Format"><K.RadioGroup name="format" label="Choose a format" options={['Brief', 'Detailed']} /></form>, play: async ({canvas,userEvent}) => { await userEvent.click(canvas.getByRole('radio',{name:'Detailed'})); const form = canvas.getByRole('form', {name:'Format'}) as HTMLFormElement; await expect(new FormData(form).get('format')).toBe('Detailed'); } };
export const RadioKeyboard: Story = { render: () => <K.RadioGroup name="keyboard-format" label="Choose a format" options={['Brief', 'Detailed']} /> };
export const Toggle: Story = { render: () => <K.Toggle label="Enable notifications" />, play: async ({canvas,userEvent}) => { const toggle=canvas.getByRole('switch',{name:'Enable notifications'}); await userEvent.tab(); await expect(toggle).toHaveFocus(); await userEvent.keyboard(' '); await expect(toggle).toBeChecked(); await userEvent.keyboard(' '); await expect(toggle).not.toBeChecked(); } };
export const ToggleOn: Story = { render: () => <K.Toggle label="Enable notifications" />, play: async ({canvas,userEvent}) => { const toggle=canvas.getByRole('switch',{name:'Enable notifications'}); await userEvent.click(toggle); await expect(toggle).toBeChecked(); } };
export const Badge: Story = { render: () => <K.Badge>Draft</K.Badge> };
export const Alert: Story = { render: () => <K.Alert>Review this draft before sharing.</K.Alert> };
export const Modal: Story = { render: () => <K.Modal title="Review draft"><p>Illustrative review content.</p></K.Modal>, play: async ({ canvas, userEvent }) => { await userEvent.click(canvas.getByRole('button', {name:'Open Review draft'})); await expect(canvas.getByRole('dialog')).toBeVisible(); await userEvent.click(canvas.getByRole('button', {name:'Close'})); await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument(); } };
export const ModalKeyboard: Story = { render: () => <K.Modal title="Review draft"><p>Illustrative review content.</p></K.Modal> };
export const Navigation: Story = { render: () => <K.Navigation items={[{label:'Overview',href:'#overview'},{label:'Components',href:'#components'}]} /> };
export const NavigationCurrent: Story = { render: () => <K.Navigation items={[{label:'Overview',href:'#overview',current:true},{label:'Components',href:'#components'}]} />, play: async ({canvas}) => { await expect(canvas.getByRole('link',{name:'Overview'})).toHaveAttribute('aria-current','page'); } };
export const Tabs: Story = { render: () => <K.Tabs items={[{label:'Overview',content:'Overview content'},{label:'Details',content:'Details content'}]} />, play: async ({canvas,userEvent}) => { const first = canvas.getByRole('tab',{name:'Overview'}); await userEvent.click(first); await userEvent.keyboard('{ArrowRight}'); await expect(canvas.getByRole('tab',{name:'Details'})).toHaveAttribute('aria-selected','true'); await expect(canvas.getByText('Details content')).toBeVisible(); } };
export const TabsKeyboardPanel: Story = { render: () => <K.Tabs items={[{label:'Overview',content:'Overview content'},{label:'Details',content:'Details content'}]} />, play: async ({canvas,userEvent}) => { await userEvent.tab(); await userEvent.keyboard('{ArrowRight}'); await userEvent.tab(); await expect(canvas.getByRole('tabpanel', {name:'Details'})).toHaveFocus(); } };
export const TabsKeyboardNavigation: Story = { render: () => <K.Tabs items={[{label:'Overview',content:'Overview content'},{label:'Details',content:'Details content'},{label:'History',content:'History content'}]} />, play: async ({canvas,userEvent}) => { await userEvent.tab(); await userEvent.keyboard('{ArrowLeft}'); await expect(canvas.getByRole('tab',{name:'History'})).toHaveFocus(); await userEvent.keyboard('{Home}'); await expect(canvas.getByRole('tab',{name:'Overview'})).toHaveAttribute('aria-selected','true'); await userEvent.keyboard('{End}'); await expect(canvas.getByRole('tab',{name:'History'})).toHaveAttribute('aria-selected','true'); await userEvent.keyboard('{ArrowRight}'); await expect(canvas.getByRole('tab',{name:'Overview'})).toHaveFocus(); } };
export const Accordion: Story = { render: () => <K.Accordion title="What is this?"><p>Illustrative explanation.</p></K.Accordion>, play: async ({canvas,userEvent}) => { await userEvent.click(canvas.getByText('What is this?')); await expect(canvas.getByText('Illustrative explanation.')).toBeVisible(); } };
export const AccordionKeyboard: Story = { render: () => <K.Accordion title="What is this?"><p>Illustrative explanation.</p></K.Accordion> };
export const Avatar: Story = { render: () => <K.Avatar name="Alex Morgan" /> };
export const AvatarWhitespace: Story = { render: () => <K.Avatar name="  Alex   Morgan  " />, play: async ({canvas}) => { const avatar=canvas.getByRole('img'); await expect(avatar).toHaveTextContent('AM'); } };
export const Breadcrumb: Story = { render: () => <K.Breadcrumb items={[{label:'Home',href:'#home'},{label:'Components'}]} /> };
export const BreadcrumbCurrentLink: Story = { render: () => <K.Breadcrumb items={[{label:'Home',href:'#home'},{label:'Components',href:'#components'}]} />, play: async ({canvas}) => { await expect(canvas.getByRole('link',{name:'Components'})).toHaveAttribute('aria-current','page'); await expect(canvas.getByRole('link',{name:'Home'})).not.toHaveAttribute('aria-current'); } };
export const Tooltip: Story = { render: () => <K.Tooltip text="Illustrative supporting information." /> };
export const TooltipFocusAndHover: Story = { render: () => <K.Tooltip text="Illustrative supporting information." />, play: async ({canvas,userEvent}) => { const button = canvas.getByRole('button', {name:'More information'}); await userEvent.tab(); await expect(button).toHaveFocus(); await userEvent.hover(button); await userEvent.unhover(button); await expect(canvas.getByRole('tooltip')).toBeVisible(); await userEvent.keyboard('{Escape}'); await expect(canvas.queryByRole('tooltip')).not.toBeInTheDocument(); } };
export const TooltipHoverAndBlur: Story = { render: () => <><K.Tooltip text="Illustrative supporting information." /><button>Next</button></>, play: async ({canvas,userEvent}) => { const button=canvas.getByRole('button',{name:'More information'}); await userEvent.hover(button); await userEvent.tab(); await userEvent.tab(); await expect(canvas.getByRole('tooltip')).toBeVisible(); await userEvent.unhover(button); await expect(canvas.queryByRole('tooltip')).not.toBeInTheDocument(); } };
export const Header: Story = { render: () => <K.Header name="AI Builder Studio"><K.StatusText>Local prototype</K.StatusText></K.Header> };
export const Wordmark: Story = { render: () => <K.Wordmark name="AI Spanda" /> };
export const Hero: Story = { render: () => <K.Hero title="See what your agent would do." description="Preview example steps before putting them into practice."><K.PrimaryButton>Start a project</K.PrimaryButton></K.Hero> };
export const SectionHeading: Story = { render: () => <K.SectionHeading title="Reusable assets" description="Start from something that works." /> };
export const AssetCard: Story = { render: () => <K.AssetCard title="Example asset" description="An illustrative reusable asset." href="#asset" />, play: async ({canvas,userEvent}) => { const link=canvas.getByRole('link',{name:'Explore Example asset'}); await expect(link).toHaveAttribute('href','#asset'); await userEvent.tab(); await expect(link).toHaveFocus(); } };
export const AudienceCard: Story = { render: () => <K.AudienceCard title="Builders">Explore a representative workflow.</K.AudienceCard> };
export const PrincipleCard: Story = { render: () => <K.PrincipleCard title="Aim before you generate">Define the goal before creating the first draft.</K.PrincipleCard> };
export const CardsWithStructuredContent: Story = { render: () => <><K.AudienceCard title="Builders"><p>Explore a workflow.</p></K.AudienceCard><K.PrincipleCard title="Aim first"><p>Define the goal.</p></K.PrincipleCard></>, play: async ({canvasElement}) => { await expect(canvasElement.querySelector('p p')).toBeNull(); } };
export const Blockquote: Story = { render: () => <K.Quote>Group incoming support tickets by topic.</K.Quote> };
export const Stepper: Story = { render: () => <K.Stepper steps={[{title:'Read',description:'Review the example input.'},{title:'Summarize',description:'Draft a concise summary.'},{title:'Review',description:'Ask a person to check it.'}]} />, play: async ({canvas}) => { const steps=canvas.getAllByRole('listitem'); await expect(steps).toHaveLength(3); await expect(steps[0]).toHaveTextContent('Read'); await expect(steps[1]).toHaveTextContent('Summarize'); await expect(steps[2]).toHaveTextContent('Review'); } };
export const Step: Story = { render: () => <ol className="sk-stepper"><K.Step number={1} title="Read" description="Review the example input." /></ol> };
export const Workbench: Story = { render: () => <K.Workbench brief={<><h2>Agent brief</h2><p>Illustrative input.</p></>} preview={<><h2>Workflow preview</h2><p>Illustrative output.</p></>} /> };
export const ProofBlock: Story = { render: () => <K.ProofBlock proof="Example evidence; replace with a verified source." /> };
export const ProofWithDate: Story = { render: () => <K.ProofBlock proof="Example evidence" verified="2026-11-24" />, play: async ({canvas}) => { await expect(canvas.getByText('Last verified: 2026-11-24')).toBeVisible(); } };
export const StatusText: Story = { render: () => <K.StatusText>Local prototype</K.StatusText> };
export const SkipLink: Story = { render: () => <><K.SkipLink /><main id="main"><h1>Example main content</h1></main></> };
export const HeroImage: Story = { render: () => <K.HeroImage src="/vite.svg" alt="Illustrative placeholder graphic" />, play: async ({canvas}) => { await expect(canvas.getByRole('img',{name:'Illustrative placeholder graphic'})).toHaveAttribute('src','/vite.svg'); } };
