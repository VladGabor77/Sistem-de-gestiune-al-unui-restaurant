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

| **ID** | **Requirement** | **Where (permalink)** | **How to check** | 
| S1-R1 | README: description, fields, sample data, how to run | README.md | read | 
| S1-R2 | AI usage section | README.md | read | 
| S1-R3 | AI log for stage 1 | ai-log/etapa-01.md | read | 
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L..-L..](link_here) | open the page | 
| S1-R5 | finished card looks different | [style.css#L..](link_here) (.done) | look at the card | 
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css#L..](link_here) (@media) | resize < 700px | 
| S1-R7 | visible focus, readable dark theme | [style.css#L..](link_here) | Tab; dark mode | 
| S1-R8 | commit "Stage 1" pushed | [link to the commit](link_here) | commit history | 

