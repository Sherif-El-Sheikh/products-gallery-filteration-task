# Filteration Task for Frontend Advanced Bootcamp at Elevate Route

## Introduction
This project is a responsive web-based application for displaying products fetched from the Fake Store API. It integrates both Server-Side Rendering (SSR) and Client-Side Rendering (CSR) to optimize performance and user experience.
>It features a professional UI design, product listing, and a detailed product page. The app is built using **Next.js** and **Tailwind CSS** (using **Shadcn/UI**components), ensuring a smooth and visually appealing user experience.

## Demo
You may watch the following video demo:

[Watch Video Demo]()


## Live Demo
  you can try the live demo by yourself  [here]().


## Features

### Products Page:
- **Product List**: Displays product name, image, price, and short description fetched from the Fake Store API.
- **Search Bar**: Allows users to filter products by name.
- **Loading States**: Shows loading indicators while fetching data from the API, ensuring a smooth user experience.
- **Not Found Page**: Displays a "Page Not Found" message with a button to return to the home page if the requested product or page is not found.
- **Responsive Layout**: The page is fully responsive and looks great on mobile and desktop devices.

### Product Details Page:
- **Product Name**: Displays the full product name.
- **Full Description**: Shows detailed information about the product.
- **Image**: Displays a larger version of the product image.
- **Price**: Shows the product price.
- **Category**: Displays the product category.
- **Loading States**: Shows a loading indicator while the product details are being fetched.
- **Not Found Page**: Displays a "Page Not Found" message with a button to return to the home page if the requested product or page is not found.
- **Responsive Layout**: The page is fully responsive and looks great on mobile and desktop devices.

- ## Project Structure

The project structure is organized with a technical-driven approach to optimize the technical aspects, ensuring scalability, maintainability, and ease of collaboration:

- `app/`: Contains pages and layout components.
  - `layout.tsx`: Main layout component for the application.
  - `page.tsx`: The main page that includes the overall structure of the app.
  - `not-found.tsx`: Handles "Page Not Found".
  - `global.css`: Global styling file.
  - `products/`:
      - `page.tsx`: Displays the list of products.
      - `loading.tsx`: Loading state for the product page.
      - `[id]/`:
        - `page.tsx`: Displays product details based on the product ID.
        - `loading.tsx`: Loading state for the product details page.
          
- `components/`: Reusable client-side components.
    - `productlist.tsx`: Displays the product list.
    - `productdetails.tsx`: Displays detailed product info.
    - `searchbar.tsx`: Search bar for filtering products.
      
- `hooks/`: Custom React hooks for state/data management.
- `lib/`: Utility functions for app logic.
- `types/`: TypeScript interfaces and types.
- `public/`: Static assets.

- Root files
- `next.config.js`: Next.js configuration.
- `package.json`: Project metadata and dependencies.
- `tailwind.config.js`: Tailwind CSS configuration.
- `component.json`: Configuration for Shadcn components.


- ## Technologies Used
- **Next.js**: React-based framework for building fast and scalable web applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Shadcn/UI**: UI components for building fast and accessible web apps.
- **TypeScript**: Type-safe superset of JavaScript.
- **Fake Store API**: API for fetching product data.
- **Lucide-react**: For vector icons in the user interface.

: 
UI/UX Design: Implemented a responsive layout and a clean, modern interface with Tailwind CSS.
State Management: Handling product data and state using React hooks.
API Integration: Fetching data from the Fake Store API and displaying it in the application.
Search and Filter: Implemented a search bar to filter products by name.
: 

  ## Skills and Techniques Covered
  
  **Next.js Development**:Server-side rendering (SSR), dynamic routing, and client-side rendering (CSR) for optimized performance and user experience.
- **Routing**: Utilized dynamic routing in Next.js to handle navigation between product list and product details.
- **API Integration**: Fetching data from the Fake Store API and displaying it in the application.
- **Data Fetching with SSR**: Utilized Next.js server-side rendering to fetch product data before rendering the page, ensuring fast page loads and SEO optimization.
- **UI/UX Design**: Implemented a user-friendly interface using Shadcn/UI and Tailwind CSS.
- **Error Handling and Notifications**: Implements error handling strategies enhancing the user interface and experience.
- **Search and Filter**: Implemented a search bar to filter products by name.
- **SEO Management**: Leveraged Next.js' `generateMetadata` for managing meta tags dynamically and improving SEO performance across pages.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- A modern web browser
- 
### Installation

To get the application running locally on your machine, follow these steps:

1. Clone the repo

   ```sh
   git clone https://github.com/Sherif-El-Sheikh/products-gallery-filteration-task
   ```

2. Change directory

   ```shell
   cd products-gallery
   ```

3. Install dependencies

   ```shell
   npm install
   ```

4. Start the development server

   ```shell
   npm run dev
   ```

5. Visit `http://localhost:3000` in your browser.

## Acknowledgment

> This project was created as the Filteration Task for the Frontend Advanced Bootcamp at Elevate Route, showcasing front-end development skills using Next.js, Tailwind CSS, and TypeScript.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

