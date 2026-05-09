# Hydro Theme

A mobile-first, responsive Hugo theme designed for plumbing and sewage services businesses.

## Features

- **Mobile-First Design**: Optimized for small screens, progressively enhanced for larger displays
- **Multilingual Support**: Full support for Polish (PL) and English (EN) content
- **SEO Optimized**: Structured data, meta tags, and semantic HTML
- **Responsive Navigation**: Adaptive header with mobile and desktop layouts
- **Tailwind CSS**: Built with Tailwind CSS for easy customization
- **Service Pages**: Pre-built templates for service listings, contact, FAQ, and more

## Directory Structure

```
themes/hydro/
├── archetypes/           # Content templates
├── assets/
│   └── css/
│       └── main.css      # Tailwind CSS imports
├── i18n/
│   ├── pl.toml           # Polish translations
│   └── en.toml           # English translations
├── layouts/
│   ├── _default/
│   │   ├── baseof.html   # Base template
│   │   ├── single.html   # Single page template
│   │   └── list.html     # List page template
│   └── index.html        # Homepage template
├── static/
│   └── images/           # SVG and image assets
└── theme.toml            # Theme metadata
```

## Mobile-First Approach

- **Defaults**: All base styles are mobile-optimized
- **Breakpoints**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
- **Header**: Mobile-friendly navigation with responsive CTA buttons
- **Typography**: Scaled for readability on all screen sizes

## Customization

### Colors

Edit `tailwind.config.js` in the root project:

```javascript
colors: {
  primary: '#007bff',    // Blue
  secondary: '#ff6600',  // Orange
}
```

### Content

Add or edit content in `/content/` (Polish) or `/content/en/` (English).

### Translations

Update text in `/themes/hydro/i18n/pl.toml` and `/themes/hydro/i18n/en.toml`.

## Building

```bash
npm run build-css && npx hugo --minify
```

## Development

```bash
npm run dev-css & npx hugo server -D
```

## License

MIT License - See LICENSE file for details
