# Style Guide: JSON for Beginners

This style guide documents the design system for the project. All contributors should follow these conventions for a consistent, professional look.

---

## Color Palette
| Name           | Variable           | Example      |
| -------------- | ------------------ | ------------ |
| Primary        | `--primary`        | ![#2563eb](https://via.placeholder.com/20/2563eb/000000?text=+) #2563eb |
| Primary Light  | `--primary-light`  | ![#3b82f6](https://via.placeholder.com/20/3b82f6/000000?text=+) #3b82f6 |
| Secondary      | `--secondary`      | ![#0ea5e9](https://via.placeholder.com/20/0ea5e9/000000?text=+) #0ea5e9 |
| Accent         | `--accent`         | ![#f59e42](https://via.placeholder.com/20/f59e42/000000?text=+) #f59e42 |
| Error          | `--error`          | ![#ef4444](https://via.placeholder.com/20/ef4444/000000?text=+) #ef4444 |
| Success        | `--success`        | ![#22c55e](https://via.placeholder.com/20/22c55e/000000?text=+) #22c55e |
| Warning        | `--warning`        | ![#facc15](https://via.placeholder.com/20/facc15/000000?text=+) #facc15 |
| Background     | `--background`     | ![#f8fafc](https://via.placeholder.com/20/f8fafc/000000?text=+) #f8fafc |
| Surface        | `--surface`        | ![#fff](https://via.placeholder.com/20/fff/000000?text=+) #fff |
| Card BG        | `--card-bg`        | ![#f1f5f9](https://via.placeholder.com/20/f1f5f9/000000?text=+) #f1f5f9 |
| Border         | `--border`         | ![#e5e7eb](https://via.placeholder.com/20/e5e7eb/000000?text=+) #e5e7eb |
| Text           | `--text`           | ![#222](https://via.placeholder.com/20/222/000000?text=+) #222 |
| Text Light     | `--text-light`     | ![#6b7280](https://via.placeholder.com/20/6b7280/000000?text=+) #6b7280 |
| Code BG        | `--code-bg`        | ![#f3f4f6](https://via.placeholder.com/20/f3f4f6/000000?text=+) #f3f4f6 |

---

## Typography
- **Font Family:** Inter, Arial, sans-serif
- **Font Weights:** 400 (normal), 600 (semi-bold), 700 (bold)
- **Sizes:**
  - H1: 2.8rem
  - H2: 2rem
  - H3: 1.5rem
  - Base: 1rem
  - Small: 0.98rem
- **Line Height:** 1.6

---

## Spacing
- `--space-xs`: 0.5rem
- `--space-sm`: 1rem
- `--space-md`: 2rem
- `--space-lg`: 3.5rem

---

## Border Radius
- `--radius-sm`: 4px
- `--radius-md`: 8px
- `--radius-lg`: 12px

---

## Shadows
- `--shadow-xs`: 0 1px 4px 0 rgba(37, 99, 235, 0.04)
- `--shadow-md`: 0 2px 16px 0 rgba(37, 99, 235, 0.06)
- `--shadow-lg`: 0 4px 32px 0 rgba(37, 99, 235, 0.10)

---

## Usage Guidelines
- Use CSS variables for all colors, spacing, and typography in `docs/css/style.css`.
- When adding new components, use the closest matching variable or extend the system.
- For new colors or sizes, add them to `:root` and document them here.
- Keep all visual changes consistent with the design system.

---

## Example: Extending the System
```css
:root {
  --info: #38bdf8;
}

.info-banner {
  background: var(--info);
  color: #fff;
  border-radius: var(--radius-md);
  padding: var(--space-sm) var(--space-md);
  box-shadow: var(--shadow-xs);
}
```

---

For questions or suggestions, open an issue or PR. 