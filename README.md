# Restaurant Management System

An application that manages restaurant orders and table assignments.
It is designed for waiters and kitchen staff to easily track the preparation status of dishes.

## Data model

| 

| **Field** | **Type** | **Notes** | 
| Dish Name | text | required, max 100 chars | 
| Served Status | boolean | toggled from the list, default false (active) | 
| Dish Type | fixed values | Main Course, Dessert, Beverage | 
| Table | relation | e.g., Table 3, Table 7 | 
| Waiter | relation | the owner of the item (from week 11) | 

## Sample data used across all stages:

1. Pizza Margherita, active, Main Course

2. Tiramisu, done, Dessert

3. Mint Lemonade, active, Beverage

## AI usage

| **Tool** | **Used for** | 
| Gemini | Brainstorming the data model and generating the README.md template | 

Details per stage:

* Stage 1: Used Gemini to map the required 5 fields to a restaurant context and format the initial README file. See the `ai-log/` folder.

## How to run

Open `index.html` in a browser. No build step, no server.

## Status

* \[ \] Stage 1: static mockup

* \[ \] Stage 2: data logic in JavaScript

**Stage 1 Checklist:**

## Status

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/VladGabor77/Sistem-de-gestiune-al-unui-restaurant/blob/main/README.md) | read |
| S1-R2 | AI usage section | [README.md](https://github.com/VladGabor77/Sistem-de-gestiune-al-unui-restaurant/blob/main/README.md) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](https://github.com/VladGabor77/Sistem-de-gestiune-al-unui-restaurant/blob/main/ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L10-L62](https://github.com/VladGabor77/Sistem-de-gestiune-al-unui-restaurant/blob/ff3e12ad95918962810eef5b6ed113c8cc657432/index.html#L10-L62) | open the page |
| S1-R5 | finished card looks different | [style.css#L129-L135](https://github.com/VladGabor77/Sistem-de-gestiune-al-unui-restaurant/blob/ff3e12ad95918962810eef5b6ed113c8cc657432/style.css#L129-L135) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css#L149-L153](https://github.com/VladGabor77/Sistem-de-gestiune-al-unui-restaurant/blob/ff3e12ad95918962810eef5b6ed113c8cc657432/style.css#L149-L153) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css#L16-L24](https://github.com/VladGabor77/Sistem-de-gestiune-al-unui-restaurant/blob/ff3e12ad95918962810eef5b6ed113c8cc657432/style.css#L16-L24) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [ff3e12a](https://github.com/VladGabor77/Sistem-de-gestiune-al-unui-restaurant/commit/ff3e12ad95918962810eef5b6ed113c8cc657432) | commit history |

## Stage 2: Data logic
Plain JavaScript, no DOM. comenzi.js holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S2-R1 | JS file linked, logs on page load | [index.html](https://github.com/VladGabor77/Sistem-de-gestiune-al-unui-restaurant/blob/main/index.html) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [comenzi.js#L2-L6](https://github.com/VladGabor77/Sistem-de-gestiune-al-unui-restaurant/blob/989ec8c185bd91f8f1551fdb52801e822b2c054c/comenzi.js#L2-L6) | read |
| S2-R3 | list, count, search, add, toggle, delete | [comenzi.js#L10-L60](https://github.com/VladGabor77/Sistem-de-gestiune-al-unui-restaurant/blob/989ec8c185bd91f8f1551fdb52801e822b2c054c/comenzi.js#L10-L60) | console output |
| S2-R4 | add rejects empty name and invalid tag | [comenzi.js#L30-L42](https://github.com/VladGabor77/Sistem-de-gestiune-al-unui-restaurant/blob/989ec8c185bd91f8f1551fdb52801e822b2c054c/comenzi.js#L30-L42) | last 2 console lines |
| S2-R5 | original array unchanged after add | [comenzi.js#L74-L77](https://github.com/VladGabor77/Sistem-de-gestiune-al-unui-restaurant/blob/989ec8c185bd91f8f1551fdb52801e822b2c054c/comenzi.js#L74-L77) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md](https://github.com/VladGabor77/Sistem-de-gestiune-al-unui-restaurant/blob/main/README.md), [ai-log/etapa-02.md](https://github.com/VladGabor77/Sistem-de-gestiune-al-unui-restaurant/blob/main/ai-log/etapa-02.md) | read |
| S2-R7 | commit "Stage 2" pushed | [989ec8c](https://github.com/VladGabor77/Sistem-de-gestiune-al-unui-restaurant/commit/989ec8c185bd91f8f1551fdb52801e822b2c054c) | commit history |

