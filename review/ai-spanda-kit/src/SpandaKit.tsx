import { useEffect, useId, useRef, useState, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ChangeEvent, type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes, type ReactNode } from 'react';
import './spanda-kit.tokens.css';
import './spanda-kit.css';

// Exploratory React fixtures. Project-specific content and visual decisions require review.
type Content = { children: ReactNode };
type Action = ButtonHTMLAttributes<HTMLButtonElement>;
export function PrimaryButton({ children, className, ...props }: Action) { return <button type="button" {...props} className={['sk-button', 'sk-primary', className].filter(Boolean).join(' ')}>{children}</button>; }
export function SecondaryButton({ children, className, ...props }: Action) { return <button type="button" {...props} className={['sk-button', 'sk-secondary', className].filter(Boolean).join(' ')}>{children}</button>; }
export function LinkButton({ children, href, className, ...props }: Content & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) { return <a {...props} href={href} className={['sk-link', className].filter(Boolean).join(' ')}>{children}</a>; }
export function Card({ children }: Content) { return <article className="sk-card">{children}</article>; }
export function FeaturedCard({ children }: Content) { return <article className="sk-card sk-featured">{children}</article>; }
type FieldExtras = { id: string; label: string; hint?: string; error?: string };
type Option = string | { label: string; value: string };
const optionLabel = (o: Option) => (typeof o === 'string' ? o : o.label);
const optionValue = (o: Option) => (typeof o === 'string' ? o : o.value);
// Joins caller-supplied, hint and error description IDs, and marks the control invalid when an error is shown.
function describe(id: string, hint: string | undefined, error: string | undefined, describedBy: string | undefined, invalid: unknown) {
  const ids = [describedBy, hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ');
  return { 'aria-describedby': ids || undefined, 'aria-invalid': error ? true : (invalid as boolean | 'true' | 'false' | undefined) };
}
function FieldShell({ id, label, required, hint, error, children }: { id: string; label: string; required?: boolean; hint?: string; error?: string; children: ReactNode }) {
  return <div className="sk-field"><label htmlFor={id}>{label}{required && ' (required)'}</label>{children}{hint && <p className="sk-field-hint" id={`${id}-hint`}>{hint}</p>}{error && <p className="sk-field-error" id={`${id}-error`}>Error: {error}</p>}</div>;
}
export function InputField({ id, label, hint, error, 'aria-describedby': describedBy, 'aria-invalid': invalid, ...props }: Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> & FieldExtras) { return <FieldShell id={id} label={label} required={props.required} hint={hint} error={error}><input {...props} {...describe(id, hint, error, describedBy, invalid)} id={id} /></FieldShell>; }
export function TextareaField({ id, label, hint, error, rows = 4, 'aria-describedby': describedBy, 'aria-invalid': invalid, ...props }: Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> & FieldExtras) { return <FieldShell id={id} label={label} required={props.required} hint={hint} error={error}><textarea {...props} {...describe(id, hint, error, describedBy, invalid)} id={id} rows={rows} /></FieldShell>; }
export function SelectField({ id, label, options, hint, error, 'aria-describedby': describedBy, 'aria-invalid': invalid, ...props }: Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id' | 'children'> & FieldExtras & { options: Option[] }) { return <FieldShell id={id} label={label} required={props.required} hint={hint} error={error}><select {...props} {...describe(id, hint, error, describedBy, invalid)} id={id}>{options.map(o => <option key={optionValue(o)} value={optionValue(o)}>{optionLabel(o)}</option>)}</select></FieldShell>; }
export function Checkbox({ label, ...props }: Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & { label: string }) { return <label className="sk-choice"><input {...props} type="checkbox" /> {label}</label>; }
// Option strings remain supported; use { label, value } when submitted values must stay stable as labels change.
export function RadioGroup({ label, options, name, value, defaultValue, onChange, disabled, required }: { label: string; options: Option[]; name: string; value?: string; defaultValue?: string; onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void; disabled?: boolean; required?: boolean }) {
  return <fieldset className="sk-group" disabled={disabled}><legend>{label}{required && ' (required)'}</legend>{options.map(o => { const v = optionValue(o); return <label className="sk-choice" key={v}><input type="radio" name={name} value={v} required={required} checked={value === undefined ? undefined : value === v} defaultChecked={value === undefined && defaultValue !== undefined ? defaultValue === v : undefined} onChange={onChange ? e => onChange(v, e) : undefined} /> {optionLabel(o)}</label>; })}</fieldset>;
}
export function Toggle({ label, ...props }: Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'role'> & { label: string }) { return <label className="sk-choice"><input {...props} className={['sk-switch', props.className].filter(Boolean).join(' ')} type="checkbox" role="switch" /> {label}</label>; }
export function Badge({ children }: Content) { return <span className="sk-badge">{children}</span>; }
export function Alert({ children }: Content) { return <div className="sk-alert" role="status">{children}</div>; }
export function Modal({ title, children }: Content & { title: string }) {
  const ref = useRef<HTMLDialogElement>(null); const titleId = useId();
  return <><SecondaryButton onClick={() => ref.current?.showModal()}>Open {title}</SecondaryButton><dialog ref={ref} aria-labelledby={titleId}><h2 id={titleId}>{title}</h2>{children}<form method="dialog"><button className="sk-button sk-secondary">Close</button></form></dialog></>;
}
export function Navigation({ items }: { items: { label: string; href: string; current?: boolean }[] }) { return <nav aria-label="Main navigation"><ul className="sk-nav">{items.map(i => <li key={i.label}><a href={i.href} aria-current={i.current ? 'page' : undefined}>{i.label}</a></li>)}</ul></nav>; }
export function Tabs({ items }: { items: { label: string; content: ReactNode }[] }) {
  const [active, setActive] = useState(0); const refs = useRef<(HTMLButtonElement | null)[]>([]); const id = useId();
  function move(key: string) { const next = key === 'ArrowRight' ? (active + 1) % items.length : key === 'ArrowLeft' ? (active + items.length - 1) % items.length : key === 'Home' ? 0 : key === 'End' ? items.length - 1 : -1; if (next >= 0) { setActive(next); refs.current[next]?.focus(); return true; } return false; }
  return <div><div role="tablist" aria-label="Example views" className="sk-tabs">{items.map((item, index) => <button key={item.label} ref={el => { refs.current[index] = el; }} role="tab" id={`${id}-tab-${index}`} aria-selected={active === index} aria-controls={`${id}-panel-${index}`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={e => { if (move(e.key)) e.preventDefault(); }}>{item.label}</button>)}</div>{items.map((item, index) => <div key={item.label} role="tabpanel" tabIndex={0} id={`${id}-panel-${index}`} aria-labelledby={`${id}-tab-${index}`} hidden={active !== index}>{item.content}</div>)}</div>;
}
export function Accordion({ title, children }: Content & { title: string }) { return <details className="sk-card"><summary>{title}</summary><div>{children}</div></details>; }
export function Avatar({ name }: { name: string }) { return <span className="sk-avatar" aria-label={name.trim()} role="img">{name.trim().split(/\s+/).filter(Boolean).map(s => s[0]).slice(0, 2).join('').toUpperCase()}</span>; }
export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) { return <nav aria-label="Breadcrumb"><ol className="sk-breadcrumb">{items.map((i, index) => <li key={i.label}>{i.href ? <a href={i.href} aria-current={index === items.length - 1 ? 'page' : undefined}>{i.label}</a> : <span aria-current={index === items.length - 1 ? 'page' : undefined}>{i.label}</span>}</li>)}</ol></nav>; }
export function Tooltip({ text }: { text: string }) {
  const [hovered, setHovered] = useState(false); const [focused, setFocused] = useState(false); const [dismissed, setDismissed] = useState(false); const id = useId();
  const open = (hovered || focused) && !dismissed;
  useEffect(() => {
    if (!open) return;
    const dismissOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setDismissed(true); };
    document.addEventListener('keydown', dismissOnEscape);
    return () => document.removeEventListener('keydown', dismissOnEscape);
  }, [open]);
  return <span onMouseEnter={() => { setHovered(true); if (!focused) setDismissed(false); }} onMouseLeave={() => setHovered(false)}><button type="button" aria-describedby={open ? id : undefined} onFocus={() => { setFocused(true); if (!hovered) setDismissed(false); }} onBlur={() => setFocused(false)} onKeyDown={e => { if (e.key === 'Escape') setDismissed(true); }}>More information</button>{open && <span role="tooltip" id={id} className="sk-hint"> {text}</span>}</span>;
}
export function Header({ name, children }: { name: string; children?: ReactNode }) { return <header className="sk-header"><strong>{name}</strong>{children}</header>; }
export function Wordmark({ name }: { name: string }) { return <strong className="sk-wordmark">{name}</strong>; }
export function Hero({ title, description, children }: { title: string; description: string; children?: ReactNode }) { return <section className="sk-hero"><h1>{title}</h1><p>{description}</p>{children}</section>; }
export function SectionHeading({ title, description }: { title: string; description?: string }) { return <div className="sk-section-heading"><h2>{title}</h2>{description && <p>{description}</p>}</div>; }
export function AssetCard({ title, description, href }: { title: string; description: string; href: string }) { return <Card><h3>{title}</h3><p>{description}</p><a href={href}>Explore {title}</a></Card>; }
export function AudienceCard({ title, children }: Content & { title: string }) { return <Card><h3>{title}</h3><div className="sk-card-content">{children}</div></Card>; }
export function PrincipleCard({ title, children }: Content & { title: string }) { return <Card><h3>{title}</h3><div className="sk-card-content">{children}</div></Card>; }
export function Quote({ children }: Content) { return <blockquote className="sk-quote">{children}</blockquote>; }
export function Stepper({ steps }: { steps: { title: string; description: string }[] }) { return <ol className="sk-stepper">{steps.map((s, i) => <Step key={s.title} number={i + 1} {...s} />)}</ol>; }
export function Step({ number, title, description }: { number: number; title: string; description: string }) { return <li><span aria-hidden="true" className="sk-step-number">{number}</span><div><strong>{title}</strong><p>{description}</p></div></li>; }
export function Workbench({ brief, preview }: { brief: ReactNode; preview: ReactNode }) { return <div className="sk-workbench"><section aria-label="Agent brief">{brief}</section><section aria-label="Workflow preview">{preview}</section></div>; }
export function ProofBlock({ proof, verified }: { proof: string; verified?: string }) { return <div><strong>Proof</strong><p>{proof}</p>{verified && <p>Last verified: {verified}</p>}</div>; }
export function StatusText({ children }: Content) { return <span className="sk-status">{children}</span>; }
export function SkipLink({ href = '#main' }: { href?: string }) { return <a className="sk-skip" href={href}>Skip to content</a>; }
export function HeroImage({ src, alt }: { src: string; alt: string }) { return <img className="sk-image" src={src} alt={alt} />; }

