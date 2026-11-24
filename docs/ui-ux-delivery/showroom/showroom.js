// Showroom behaviour: stage tabs, token switch and the live example components. No dependencies.

// Tabs, following the ARIA Authoring Practices pattern with automatic activation.
for (const root of document.querySelectorAll('[data-tabs]')) {
  const tabs = [...root.querySelectorAll('[role="tab"]')];
  const select = (tab, moveFocus) => {
    for (const t of tabs) {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    }
    if (moveFocus) tab.focus();
  };
  root.querySelector('[role="tablist"]').addEventListener('keydown', (event) => {
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    const next = { ArrowRight: i + 1, ArrowDown: i + 1, ArrowLeft: i - 1, ArrowUp: i - 1, Home: 0, End: tabs.length - 1 }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    select(tabs[(next + tabs.length) % tabs.length], true);
  });
  for (const t of tabs) t.addEventListener('click', () => select(t, false));
}

// Token switch: one attribute changes which values the same token names resolve to.
const stage = document.getElementById('stage');
const tokenStatus = document.getElementById('token-status');
const showTokens = () => {
  const style = getComputedStyle(stage);
  for (const cell of document.querySelectorAll('[data-token]')) {
    const value = style.getPropertyValue(cell.dataset.token).trim();
    const swatch = value.startsWith('#') ? `<span class="sp-swatch" style="background:${value}" aria-hidden="true"></span>` : '';
    cell.innerHTML = `${swatch}<code>${value}</code>`;
  }
};
for (const radio of document.querySelectorAll('input[name="tokens"]')) {
  radio.addEventListener('change', () => {
    stage.dataset.tokens = radio.value;
    showTokens();
    tokenStatus.textContent = radio.value === 'aispanda' ? 'Components now use the AI Spanda token values.' : 'Components now use the neutral placeholder values.';
  });
}
showTokens();

// Example components.
const saveStatus = document.getElementById('ex-save-status');
document.getElementById('ex-save').addEventListener('click', () => { saveStatus.textContent = 'Changes saved.'; });
document.getElementById('ex-cancel').addEventListener('click', () => { saveStatus.textContent = 'Changes discarded.'; });

const form = document.getElementById('ex-signup');
const email = document.getElementById('ex-email');
const emailError = document.getElementById('ex-email-error');
const formStatus = document.getElementById('ex-form-status');
const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const setError = (on) => {
  emailError.hidden = !on;
  email.setAttribute('aria-invalid', String(on));
  email.setAttribute('aria-describedby', on ? 'ex-email-hint ex-email-error' : 'ex-email-hint');
};
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!validEmail(email.value.trim())) {
    setError(true);
    formStatus.textContent = '';
    email.focus();
    return;
  }
  setError(false);
  formStatus.textContent = `Subscribed ${email.value.trim()}.`;
});
email.addEventListener('input', () => { if (email.getAttribute('aria-invalid') === 'true' && validEmail(email.value.trim())) setError(false); });

const dialog = document.getElementById('ex-dialog');
const opener = document.getElementById('ex-open-dialog');
const dialogStatus = document.getElementById('ex-dialog-status');
opener.addEventListener('click', () => { dialogStatus.textContent = ''; dialog.returnValue = ''; dialog.showModal(); });
dialog.addEventListener('close', () => {
  dialogStatus.textContent = dialog.returnValue === 'delete' ? 'Draft deleted.' : 'Draft kept.';
  opener.focus();
});
