/* @ds-bundle: {"format":4,"namespace":"MadoxTerrellDesignSystem_30d205","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Waveform","sourcePath":"components/brand/Waveform.jsx"},{"name":"Chip","sourcePath":"components/forms/Chip.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"ScoreCard","sourcePath":"components/shop/ScoreCard.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"ee4291510388","components/brand/Waveform.jsx":"1a5c1047f091","components/forms/Chip.jsx":"2b72e4bab7f1","components/forms/Field.jsx":"21ccd1962626","components/navigation/SiteHeader.jsx":"c472660af8c3","components/shop/ScoreCard.jsx":"081a102a4117","ui_kits/website/Cart.jsx":"cdbd1e65cada","ui_kits/website/Contact.jsx":"5cb4c831fdb2","ui_kits/website/Home.jsx":"d45dfe350a9f","ui_kits/website/Scores.jsx":"b7b8054210c7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MadoxTerrellDesignSystem_30d205 = window.MadoxTerrellDesignSystem_30d205 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  disabled,
  className,
  children
}) {
  const cls = 'mx-btn mx-btn--' + variant + (className ? ' ' + className : '');
  if (href) return /*#__PURE__*/React.createElement("a", {
    className: cls,
    href: href,
    onClick: onClick
  }, children);
  return /*#__PURE__*/React.createElement("button", {
    className: cls,
    type: type,
    disabled: disabled,
    onClick: onClick
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/Waveform.jsx
try { (() => {
const DEFAULT_BARS = [18, 34, 52, 28, 70, 44, 90, 60, 36, 78, 48, 26, 64, 40, 20];
function Waveform({
  bars = DEFAULT_BARS,
  height = 160
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mx-wave",
    "aria-hidden": "true",
    style: {
      height
    }
  }, bars.map((v, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: 'mx-wave__bar' + (i % 4 === 2 ? ' mx-wave__bar--violet' : ''),
    style: {
      height: v + '%'
    }
  })));
}
Object.assign(__ds_scope, { Waveform });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Waveform.jsx", error: String((e && e.message) || e) }); }

// components/forms/Chip.jsx
try { (() => {
function Chip({
  selected = false,
  onClick,
  children
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'mx-chip' + (selected ? ' mx-chip--selected' : ''),
    "aria-pressed": selected,
    onClick: onClick
  }, selected ? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12.5l4.5 4.5L19 7"
  })) : null, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Chip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  id,
  label,
  type = 'text',
  multiline = false,
  rows = 5,
  placeholder,
  help,
  error,
  value,
  defaultValue,
  onChange
}) {
  const fid = id || 'mx-' + String(label || 'field').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const noteId = error || help ? fid + '-note' : undefined;
  const common = {
    id: fid,
    className: 'mx-field__control',
    placeholder,
    value,
    defaultValue,
    onChange,
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': noteId
  };
  return /*#__PURE__*/React.createElement("div", {
    className: 'mx-field' + (error ? ' mx-field--error' : '')
  }, /*#__PURE__*/React.createElement("label", {
    className: "mx-field__label",
    htmlFor: fid
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, common)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, common)), error ? /*#__PURE__*/React.createElement("p", {
    id: noteId,
    className: "mx-field__note mx-field__note--error"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7.5v5.5M12 16.5v.01"
  })), 'Error: ' + error) : help ? /*#__PURE__*/React.createElement("p", {
    id: noteId,
    className: "mx-field__note"
  }, help) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function CartIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 4h2.5l2.2 10.2a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L20 8H6.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "19.5",
    r: "1.3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "19.5",
    r: "1.3"
  }));
}
function SiteHeader({
  links = ['Works', 'Listen', 'Scores', 'Gallery', 'About', 'Contact'],
  active,
  cartCount = 0,
  onNavigate,
  onCart
}) {
  const count = cartCount == null ? 0 : cartCount;
  const go = l => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(l);
    }
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "mx-header"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mx-header__brand",
    href: "#",
    onClick: go('Home')
  }, "Madox Terrell"), /*#__PURE__*/React.createElement("nav", {
    className: "mx-header__nav",
    "aria-label": "Main"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase(),
    onClick: go(l),
    className: 'mx-header__link' + (l === active ? ' mx-header__link--active' : ''),
    "aria-current": l === active ? 'page' : undefined
  }, l))), /*#__PURE__*/React.createElement("a", {
    className: "mx-header__cart",
    href: "#cart",
    onClick: e => {
      if (onCart) {
        e.preventDefault();
        onCart();
      }
    },
    "aria-label": 'Cart, ' + count + (count === 1 ? ' item' : ' items')
  }, /*#__PURE__*/React.createElement(CartIcon, null), /*#__PURE__*/React.createElement("span", {
    className: "mx-header__count meta"
  }, count)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/shop/ScoreCard.jsx
try { (() => {
function ScoreCard({
  title,
  href,
  instrumentation,
  meta,
  price,
  cover,
  onAdd,
  addLabel = 'Add to cart'
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "mx-score"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-score__cover"
  }, cover ? /*#__PURE__*/React.createElement("img", {
    src: cover,
    alt: ""
  }) : /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, "[First page of score]")), /*#__PURE__*/React.createElement("div", {
    className: "mx-score__body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mx-eyebrow eyebrow"
  }, instrumentation || '[Instrumentation]'), /*#__PURE__*/React.createElement("h3", {
    className: "mx-score__title score-title"
  }, href ? /*#__PURE__*/React.createElement("a", {
    href: href
  }, title) : title), /*#__PURE__*/React.createElement("p", {
    className: "mx-score__meta meta"
  }, meta || 'PDF · [Level]'), /*#__PURE__*/React.createElement("div", {
    className: "mx-score__foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mx-score__price price"
  }, price || '[Price]'), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onAdd
  }, addLabel))));
}
Object.assign(__ds_scope, { ScoreCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shop/ScoreCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Cart.jsx
try { (() => {
function Cart({
  items,
  onRemove,
  onClear,
  go
}) {
  const {
    Button,
    Field
  } = window.MadoxTerrellDesignSystem_30d205;
  const [step, setStep] = React.useState('cart');
  const [err, setErr] = React.useState(null);
  const total = items.reduce((a, s) => a + s.price, 0);
  if (step === 'done') return /*#__PURE__*/React.createElement("main", {
    className: "kit-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow mx-eyebrow"
  }, "Order received"), /*#__PURE__*/React.createElement("h1", {
    className: "display-lg",
    style: {
      margin: 0
    }
  }, "Thank you"), /*#__PURE__*/React.createElement("p", {
    className: "body-lg",
    style: {
      margin: 0
    }
  }, "Digital download, instant delivery. Your PDFs are on their way to [email address]."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('Scores')
  }, "Back to scores")));
  return /*#__PURE__*/React.createElement("main", {
    className: "kit-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap kit-cart"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display-lg",
    style: {
      margin: 0
    }
  }, "Cart"), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      margin: 0,
      color: 'var(--ink-muted)'
    }
  }, "Your cart is empty."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('Scores')
  }, "Browse scores")) : items.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "kit-line"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow mx-eyebrow"
  }, s.instrumentation), /*#__PURE__*/React.createElement("span", {
    className: "score-title"
  }, s.title), /*#__PURE__*/React.createElement("span", {
    className: "meta",
    style: {
      color: 'var(--ink-muted)'
    }
  }, s.meta)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "price",
    style: {
      color: 'var(--accent)'
    }
  }, cad(s.price)), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onRemove(i)
  }, "Remove"))))), items.length > 0 ? /*#__PURE__*/React.createElement("form", {
    className: "kit-card",
    style: {
      background: 'var(--surface-alt)',
      border: '1px solid var(--line)',
      alignSelf: 'start'
    },
    onSubmit: e => {
      e.preventDefault();
      const em = e.target.email.value;
      if (!/.+@.+/.test(em)) {
        setErr('Enter an email address.');
        return;
      }
      onClear();
      setStep('done');
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display-md",
    style: {
      margin: 0
    }
  }, "Checkout"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "meta",
    style: {
      color: 'var(--ink-muted)'
    }
  }, "Total \xB7 ", items.length, " ", items.length === 1 ? 'item' : 'items'), /*#__PURE__*/React.createElement("span", {
    className: "price",
    style: {
      color: 'var(--accent)'
    }
  }, cad(total))), /*#__PURE__*/React.createElement(Field, {
    id: "name",
    label: "Name"
  }), /*#__PURE__*/React.createElement(Field, {
    id: "email",
    label: "Email address",
    type: "email",
    placeholder: "[email address]",
    help: "Download links are sent here.",
    error: err
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, "Pay ", cad(total))) : null));
}
Object.assign(window, {
  Cart
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Cart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
function Contact() {
  const {
    Button,
    Field
  } = window.MadoxTerrellDesignSystem_30d205;
  const [errs, setErrs] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    const t = e.target,
      n = {};
    if (!t.cname.value.trim()) n.name = 'Enter your name.';
    if (!/.+@.+/.test(t.cemail.value)) n.email = 'Enter an email address.';
    if (!t.cmsg.value.trim()) n.msg = 'Enter a message.';
    setErrs(n);
    if (!Object.keys(n).length) setSent(true);
  };
  return /*#__PURE__*/React.createElement("main", {
    className: "kit-sec",
    style: {
      background: 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap kit-cart"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow mx-eyebrow"
  }, "Contact"), /*#__PURE__*/React.createElement("h1", {
    className: "display-lg",
    style: {
      margin: 0
    }
  }, "Commission a new work"), /*#__PURE__*/React.createElement("p", {
    className: "body-lg",
    style: {
      margin: 0
    }
  }, "Write about the ensemble, the occasion and the date. Madox Terrell replies from [email address].")), sent ? /*#__PURE__*/React.createElement("div", {
    className: "kit-card",
    style: {
      background: 'var(--surface-alt)',
      border: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display-md",
    style: {
      margin: 0
    }
  }, "Message sent"), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      margin: 0
    }
  }, "Thank you. You will hear back at the address you gave.")) : /*#__PURE__*/React.createElement("form", {
    className: "kit-card",
    onSubmit: submit,
    noValidate: true,
    style: {
      background: 'var(--surface-alt)',
      border: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    id: "cname",
    label: "Name",
    error: errs.name
  }), /*#__PURE__*/React.createElement(Field, {
    id: "cemail",
    label: "Email address",
    type: "email",
    placeholder: "[email address]",
    error: errs.email
  }), /*#__PURE__*/React.createElement(Field, {
    id: "cmsg",
    label: "Message",
    multiline: true,
    rows: 5,
    error: errs.msg
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, "Send message")))));
}
function Placeholder({
  page
}) {
  return /*#__PURE__*/React.createElement("main", {
    className: "kit-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display-lg",
    style: {
      margin: 0
    }
  }, page), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      margin: 0,
      color: 'var(--ink-muted)'
    }
  }, "[This page is not defined in the source kit.]")));
}
Object.assign(window, {
  Contact,
  Placeholder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function Home({
  go
}) {
  const {
    Button,
    Waveform
  } = window.MadoxTerrellDesignSystem_30d205;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "kit-sec",
    style: {
      background: 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap kit-hero"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow mx-eyebrow"
  }, "Composer / Vocalist / Producer"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-name",
    style: {
      margin: 0
    }
  }, "Madox", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "Terrell")), /*#__PURE__*/React.createElement("p", {
    className: "body-lg",
    style: {
      margin: 0,
      maxWidth: 520
    }
  }, "Choral and electronic music, written, sung and produced in Ottawa."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    onClick: () => go('Listen')
  }, "Listen"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('Scores')
  }, "View scores"))), /*#__PURE__*/React.createElement(Waveform, null))), /*#__PURE__*/React.createElement("section", {
    className: "kit-sec",
    style: {
      background: 'var(--surface-alt)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display-lg",
    style: {
      margin: 0
    }
  }, "Selected works"), /*#__PURE__*/React.createElement("div", {
    className: "kit-grid2"
  }, /*#__PURE__*/React.createElement("article", {
    className: "kit-card",
    style: {
      background: 'var(--violet)',
      color: 'var(--on-fill)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      margin: 0
    }
  }, "Choral"), /*#__PURE__*/React.createElement("h3", {
    className: "display-md",
    style: {
      margin: 0
    }
  }, "Writing for choirs"), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      margin: 0
    }
  }, "[Short description of choral work: ensembles, years, venues.]"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    onClick: () => go('Scores')
  }, "Browse scores"))), /*#__PURE__*/React.createElement("article", {
    className: "kit-card",
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow mx-eyebrow"
  }, "Electronic"), /*#__PURE__*/React.createElement("h3", {
    className: "display-md",
    style: {
      margin: 0
    }
  }, "Records as Madox"), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      margin: 0
    }
  }, "[Short description of electronic releases.]"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('Listen')
  }, "Listen")))), /*#__PURE__*/React.createElement("article", {
    className: "kit-card kit-release",
    style: {
      background: 'var(--action)',
      color: 'var(--on-fill)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-release__cover meta"
  }, "[Release artwork]"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      margin: 0
    }
  }, "Latest release"), /*#__PURE__*/React.createElement("h3", {
    className: "display-md",
    style: {
      margin: 0
    }
  }, "[Release title]"), /*#__PURE__*/React.createElement("p", {
    className: "meta",
    style: {
      margin: 0
    }
  }, "Madox \xB7 [Year]"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    onClick: () => go('Listen')
  }, "Listen")))))), /*#__PURE__*/React.createElement(ContactBand, {
    go: go
  }));
}
function ContactBand({
  go
}) {
  const {
    Button
  } = window.MadoxTerrellDesignSystem_30d205;
  return /*#__PURE__*/React.createElement("section", {
    className: "kit-sec",
    style: {
      background: 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display-xl",
    style: {
      margin: 0
    }
  }, "Commission a new work"), /*#__PURE__*/React.createElement("p", {
    className: "body-lg",
    style: {
      margin: 0,
      maxWidth: 640
    }
  }, "[One line on commissions: forces, timelines, how to start.]"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go('Contact')
  }, "Get in touch")));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-alt)',
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      flexWrap: 'wrap',
      padding: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "small",
    style: {
      color: 'var(--ink-muted)'
    }
  }, "\xA9 2026 Madox Terrell"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)'
    },
    "aria-label": "Social"
  }, /*#__PURE__*/React.createElement("a", {
    className: "small",
    href: "#"
  }, "Facebook"), /*#__PURE__*/React.createElement("a", {
    className: "small",
    href: "#"
  }, "Instagram"))));
}
Object.assign(window, {
  Home,
  ContactBand,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Scores.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SCORES = [{
  id: 1,
  title: '[Score title]',
  instrumentation: 'SATB, a cappella',
  meta: 'PDF · Intermediate',
  price: 4,
  cat: 'Choral'
}, {
  id: 2,
  title: '[Score title]',
  instrumentation: 'Voice and piano',
  meta: 'PDF · Advanced',
  price: 6,
  cat: 'Voice'
}, {
  id: 3,
  title: '[Score title]',
  instrumentation: 'SSA and piano',
  meta: 'PDF · Intermediate',
  price: 4,
  cat: 'Choral'
}, {
  id: 4,
  title: '[Score title]',
  instrumentation: 'Solo piano',
  meta: 'PDF · [Level]',
  price: 5,
  cat: 'Piano'
}];
const cad = n => '$' + n.toFixed(2) + ' CAD';
function Scores({
  onAdd
}) {
  const {
    Chip,
    ScoreCard
  } = window.MadoxTerrellDesignSystem_30d205;
  const [cat, setCat] = React.useState('All');
  const list = SCORES.filter(s => cat === 'All' || s.cat === cat);
  return /*#__PURE__*/React.createElement("main", {
    className: "kit-sec",
    style: {
      background: 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow mx-eyebrow"
  }, "Shop"), /*#__PURE__*/React.createElement("h1", {
    className: "display-lg",
    style: {
      margin: 0
    }
  }, "Scores"), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      margin: 0,
      color: 'var(--ink-muted)'
    }
  }, "Digital download, instant delivery.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, ['All', 'Choral', 'Piano', 'Voice', 'Electronic'].map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    selected: cat === c,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-6)'
    }
  }, list.map(s => /*#__PURE__*/React.createElement(ScoreCard, _extends({
    key: s.id
  }, s, {
    price: cad(s.price),
    onAdd: () => onAdd(s)
  }))), list.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      color: 'var(--ink-muted)'
    }
  }, "[No scores in this category yet.]") : null)));
}
Object.assign(window, {
  Scores,
  SCORES,
  cad
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Scores.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Waveform = __ds_scope.Waveform;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.ScoreCard = __ds_scope.ScoreCard;

})();
