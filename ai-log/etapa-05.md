# Stage 5: AI log

## Tools
- Gemini

## Conversations
- [Gemini chat](https://gemini.google.com/) (React state, events, and CSS theme toggling)

## Key requests
### 1. Adding interactivity with state
- **Asked:** How to initialize Stage 5 and make the UI interactive.
- **Got:** Code to move the data array into `useState`, implement `handleToggle` and `handleDelete` using immutable updates, and pass these functions down to `ComandaCard`.
- **Changed or rejected:** Kept the exact structure.

### 2. Fixing the dark mode toggle
- **Asked:** How to make the dark mode button work since the OS preference was overriding it.
- **Got:** An updated `App.css` that uses `:not([data-theme="light"])` for the system preference and `:root[data-theme="dark"]` for the manual override.
- **Changed or rejected:** Successfully applied the CSS fix and variables for the neon theme.

## What I learned / what did not work
I learned how to manage local state in React using `useState`, how to handle user events like `onClick` and `onChange`, and how to manipulate CSS variables dynamically through state to toggle dark mode.