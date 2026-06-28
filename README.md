# Inventory Management App (MVC)

A learning-focused inventory management application built with Node.js, Express, EJS, and the Model-View-Controller (MVC) pattern.

The application supports product management, image uploads, form validation, session-based authentication, and last-visit tracking using cookies.

> **Note:** Products and users are stored in memory, so all changes are lost whenever the server restarts.

## Features

- User registration, login, and logout
- Session-based route protection
- Add products with image uploads
- View, update, and delete products
- Server-side form validation
- Last-visit tracking with cookies
- MVC project architecture
- Server-rendered EJS views
- Responsive CSS and client-side JavaScript

## Technologies

- Node.js
- Express
- EJS
- Express EJS Layouts
- Express Session
- Express Validator
- Multer
- Cookie Parser
- HTML and CSS

## Project Structure

```text
.
|-- index.js
|-- package.json
|-- public/
|   |-- main.js
|   |-- css/
|   |   `-- products.css
|   `-- images/
`-- src/
    |-- controllers/
    |   |-- product.controller.js
    |   `-- user.controller.js
    |-- middlewares/
    |   |-- auth.middleware.js
    |   |-- fileUpload.middleware.js
    |   |-- lastvisit.middleware.js
    |   `-- validation.middleware.js
    |-- models/
    |   |-- product.model.js
    |   `-- user.model.js
    `-- views/
        |-- layout.ejs
        |-- login.ejs
        |-- Register.ejs
        |-- products.ejs
        |-- new-products.ejs
        `-- update-product.ejs
```

## Prerequisites

Make sure you have the following installed:

- Node.js 18 or newer
- npm

Check your installed versions:

```bash
node --version
npm --version
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Abhinav7972/inventory_management_app_mvc.git
cd inventory_management_app_mvc
```

2. Install the dependencies:

```bash
npm install
```

3. Start the application:

```bash
node index.js
```

4. Open the application:

```text
http://localhost:3000
```

## How to Use

1. Open `/register` and create an account.
2. Log in using the registered email and password.
3. View the available products.
4. Add a product using the **New Products** page.
5. Upload an image and provide a name, description, and price.
6. Update or delete products from the product list.
7. Use **Logout** to end the current session.

## Application Routes

| Method | Route | Description | Authentication |
|---|---|---|---|
| GET | `/register` | Display the registration form | No |
| POST | `/register` | Register a user | No |
| GET | `/login` | Display the login form | No |
| POST | `/login` | Log in a user | No |
| GET | `/logout` | Log out the current user | No |
| GET | `/` | Display all products | Yes |
| POST | `/` | Add a product | Yes |
| GET | `/new` | Display the new-product form | Yes |
| GET | `/update-product/:id` | Display the update form | Yes |
| POST | `/update-product` | Update a product | Yes |
| POST | `/delete-product/:id` | Delete a product | Yes |

## Architecture

The application follows the MVC pattern:

- **Models** manage in-memory product and user data.
- **Views** render the user interface with EJS.
- **Controllers** process requests and coordinate models and views.
- **Middleware** handles authentication, validation, cookies, and file uploads.
- **Public assets** contain browser-side JavaScript, stylesheets, and uploaded images.

## Validation

When adding a product:

- The product name is required.
- The price must be greater than zero.
- An image file is required.

Validation errors are displayed on the product form.

## Current Limitations

This project is intended for learning and demonstration purposes.

- Data is stored in memory and resets when the server restarts.
- Passwords are stored as plain text.
- The session secret is hard-coded.
- The default in-memory session store is used.
- Uploaded files do not have file-type or size validation.
- User registration and login inputs are not fully validated.
- Automated tests have not been added.
- The server port is currently fixed at `3000`.

Do not use the current authentication or storage implementation in production.

## Possible Improvements

- Add MongoDB, PostgreSQL, or another persistent database.
- Hash passwords using bcrypt.
- Move secrets and configuration into environment variables.
- Add duplicate-email validation.
- Validate uploaded file types and sizes.
- Add centralized error handling.
- Add product quantity and stock tracking.
- Add unit and integration tests.
- Add search, filtering, sorting, and pagination.
- Use a production-ready session store.

## Dependencies

- `express`
- `ejs`
- `express-ejs-layouts`
- `express-session`
- `express-validator`
- `multer`
- `cookie-parser`

## License

This project uses the ISC license.