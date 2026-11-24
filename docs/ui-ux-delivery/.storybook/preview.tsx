import type { Preview } from '@storybook/react-vite';
import '../examples/tokens.example.css';
import '../examples/components.css';

const preview: Preview = {
  parameters: { a11y: { test: 'error' } },
  decorators: [(Story) => (<div className="ex-page ex-canvas"><Story /></div>)],
};

export default preview;
