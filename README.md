# Shopping Cart App

This is a simple React application that allows users to add products to a shopping cart, update quantities, and track their progress towards earning a free gift when the cart subtotal reaches a certain threshold.

> Demo
>
> Vercel Link: https://prems-shopping-cart.vercel.app/

## Features

- Display list of products with quantity selectors

- Add/remove products from cart

- Update product quantities in cart

- Automatic free gift when cart subtotal reaches ₹1000

- Progress bar showing progress towards free gift

- Free gift is automatically removed if subtotal falls below threshold

## Installation

1. Clone this repository -`git clone [repo-url]`
2. Install dependencies - `npm install`
3. Run the development server - `npm start`
4. Open http://localhost:3000 in your browser

## How to Use

1. Browse the list of available products

2. Click "Add to Cart" to add products to your cart

3. In the cart section, you can:

   - Adjust quantities of items

   - Remove items completely

4. When your cart subtotal reaches ₹1000, a free gift will be automatically added

5. If your subtotal falls below ₹1000, the free gift will be automatically removed

## Dependencies

- This project uses only React's built-in state management(useState) with no externl libraries

## Tech Stack

- React.js (v18+)
- JavaScript ES6+ (arrow functions, destructuring)
- CSS (for styling)
