# Stage 4: AI log

## Tools
- Gemini

## Conversations
- [Gemini chat](https://gemini.google.com/) (React components, props, and conditional rendering)

## Key requests
### 1. Component extraction
- **Asked:** How to replace the raw JSON list with actual UI components.
- **Got:** Two components (`ComandaCard` and `ComandaList`) mapping over the data array and passing information via props.
- **Changed or rejected:** Kept the exact structure, ensuring the neon CSS classes apply correctly based on the item state.

## What I learned / what did not work
I learned how to break down the UI into reusable React components, pass data from parent to child using `props`, and render lists dynamically using the `map` function with unique `key` attributes.