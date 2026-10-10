# Cravings_By_Umi

A modern bakery landing page built with React and Vite for showcasing handcrafted cakes, pies, pastries, and custom dessert orders.

This project is designed as a polished single-page storefront, with a strong hero section, menu highlights, photo gallery, company story, and contact/order call-to-action. It is ideal for small bakeries, dessert shops, or custom cake businesses that want a clean and warm online presence.

## Front page

![image of the front-page of the website](src\logos\front-page.png)

## Overview

Cravings_By_Umi is a responsive web experience that helps customers:

- discover the bakery's signature treats
- explore product categories such as cakes, pies, cookies, and pastries
- view a gallery of baked goods
- learn about the brand story and offerings
- contact the bakery for custom orders or inquiries

## Features

- Responsive one-page layout for desktop and mobile devices
- Elegant hero section with brand messaging and CTAs
- Product menu with pricing and short descriptions
- Gallery section highlighting desserts and bakery items
- About section covering the bakery brand and offerings
- Contact area with business information and custom-order request link
- Mobile-friendly navigation with collapsible menu
- Clean styling using CSS modules and reusable section-based components

## Tech Stack

- React 19
- Vite 8
- JavaScript (JSX)
- CSS for component and page styling

## Project Structure

```text
cakes-pie/
├── public/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── ...
│   ├── components/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── footer/
│   │   ├── gallery/
│   │   ├── home/
│   │   ├── menu/
│   │   └── navbar/
│   ├── App.jsx
│   ├── index.css
│   ├── index.js
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js
└── ...
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18 or later
- npm

### Install dependencies

```bash
npm install
```

### Run the app in development mode

```bash
npm run dev
```

This starts the Vite development server. Open the local URL shown in the terminal to view the application in the browser.

### Build for production

```bash
npm run build
```

This creates a production-ready build in the `dist/` directory.

### Preview production build

```bash
npm run preview
```

## Available Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

## Main Application Files

- `src/App.jsx` — page composition and section layout
- `src/components/home/index.jsx` — hero introduction and key messaging
- `src/components/about/index.jsx` — bakery story and product categories
- `src/components/menu/index.jsx` — dessert items, prices, and ordering links
- `src/components/gallery/index.jsx` — bakery image gallery
- `src/components/contact/index.jsx` — business info and contact CTA
- `src/components/navbar/index.jsx` — responsive navigation header
- `src/components/footer/index.jsx` — footer links and social icons

## Customization Guide

### Update bakery branding

Edit the text in:

- `src/components/navbar/index.jsx`
- `src/components/home/index.jsx`
- `src/components/contact/index.jsx`
- `src/components/footer/index.jsx`

### Update menu items

Modify the `menuItems` array in:

- `src/components/menu/index.jsx`

Each item contains:

- `name`
- `price`
- `description`
- `image`

### Replace gallery assets

Update the `galleryItems` list in:

- `src/components/gallery/index.jsx`

### Update contact information

Edit the bakery details in:

- `src/components/contact/index.jsx`

## Styling

The project uses a combination of component-specific CSS files and shared global styles. Each component includes its own `style.css` file for styling the section layout and related design details.

## Notes

This project is best suited for a bakery or dessert brand that wants a lightweight, attractive landing page without needing a full backend or database. It is intentionally focused on presentation and conversion, making it a good foundation for future enhancements such as:

- online ordering form
- shopping cart integration
- product filtering
- appointment or custom cake booking system
- CMS-backed menu management

## License

No explicit license has been added to this project yet.

## Contributing

If you want to extend or improve the project:

1. create a feature branch
2. make your changes
3. validate with the project scripts
4. open a pull request with a clear summary

## Summary

Cravings_By_Umi is a modern bakery storefront built with React and Vite, designed to present premium desserts, tell the brand story, and encourage customer inquiries. The codebase is straightforward, modular, and easy to customize for a real bakery business or small food brand.
