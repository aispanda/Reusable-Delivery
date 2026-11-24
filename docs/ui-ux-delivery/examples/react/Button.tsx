// Neutral example button. Styles come from examples/components.css, loaded in .storybook/preview.tsx.
import type { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ variant = 'primary', className, type = 'button', ...props }: ButtonProps) {
  const classes = ['ex-button', `ex-button--${variant}`, className].filter(Boolean).join(' ');
  return <button type={type} className={classes} {...props} />;
}
