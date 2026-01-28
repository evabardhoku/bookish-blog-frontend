# Bookish Blog (Frontend)

A responsive **frontend-only** website for an online bookstore + blog experience.
Built during an internship as a team project, this site includes a modern homepage, interactive book sections, book detail pages, a shopping cart UI, and category switching.

## Features

- Responsive **Navigation Bar** with hover states and icons
- **Bootstrap Carousel** (hero slider with images + text)
- Book sections with cards and **Swiper.js** slider
- Category filtering / switching (dynamic rendering with JavaScript)
- **Book details pages** (shared template for all books)
- **Add to Cart animation** (image clone + slide effect)
- **Shopping Cart page** with order summary + remove button UI
- Fully responsive layout (Flexbox / CSS Grid + media queries)

## Tech Stack

- HTML5
- CSS3 (Flexbox, Grid, Media Queries)
- JavaScript (DOM manipulation)
- Bootstrap (Carousel)
- Swiper.js (book card slider)

## Pages 

- `index.html` — Home page
- `categories.html` (or similar) — Category switching page
- `cart.html` — Shopping cart page
- `book-*.html` — Book detail pages (template-based UI)

> File names may differ depending on your local structure.

## Run Locally

Because this is a static frontend project, you can run it in any of these ways:

### Option 1: Open directly
- Open `index.html` in your browser.

### Option 2: Use VS Code Live Server (recommended)
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**

### Option 3: Simple local server
If you have Python installed:

```bash
python -m http.server 5500
```
