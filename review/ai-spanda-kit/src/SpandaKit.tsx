import { useEffect, useId, useRef, useState, type ButtonHTMLAttributes, type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes, type ReactNode } from 'react';
import './spanda-kit.tokens.css';
import './spanda-kit.css';

// Exploratory React fixtures. Project-specific content and visual decisions require review.
type Content = { children: ReactNode };
type Action = ButtonHTMLAttributes<HTMLButtonElement>;
export function PrimaryButton({ children, className, ...props }: Action) { return <button type="button" {...props} className={['sk-button', 'sk-primary', className].filter(Boolean).join(' ')}>{children}</button>; }
export function SecondaryButton({ children, className, ...props }: Action) { return <button type="button" {...props} className={['sk-button', 'sk-secondary', className].filter(Boolean).join(' ')}>{children}</button>; }
export function LinkButton({ children, href }: Content & { href: string }) { return <a className="sk-link" href={href}>{children}</a>; }
export function Card({ children }: Content) { return <article className="sk-card">{children}</article>; }
export function FeaturedCard({ children }: Content) { return <article className="sk-card sk-featured">{children}</article>; }
export function InputField({ id, label, ...props }: Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> & { id: string; label: string }) { return <label className="sk-field" htmlFor={id}><span>{label}{props.required && ' (required)'}</span><input {...props} id={id} /></label>; }
export function TextareaField({ id, label, rows = 4, ...props }: Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> & { id: string; label: string }) { return <label className="sk-field" htmlFor={id}><span>{label}{props.required && ' (required)'}</span><textarea {...props} id={id} rows={rows} /></label>; }
export function SelectField({ id, label, options, ...props }: Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id' | 'children'> & { id: string; label: string; options: string[] }) { return <label className="sk-field" htmlFor={id}><span>{label}{props.required && ' (required)'}</span><select {...props} id={id}>{options.map(o => <option key={o}>{o}</option>)}</select></label>; }
export function Checkbox({ label, ...props }: Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & { label: string }) { return <label className="sk-choice"><input {...props} type="checkbox" /> {label}</label>; }
export function RadioGroup({ label, options, name }: { label: string; options: string[]; name: string }) { return <fieldset className="sk-group"><legend>{label}</legend>{options.map(o => <label className="sk-choice" key={o}><input type="radio" name={name} value={o} /> {o}</label>)}</fieldset>; }
export function Toggle({ label }: { label: string }) { return <label className="sk-choice"><input className="sk-switch" type="checkbox" role="switch" /> {label}</label>; }
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

