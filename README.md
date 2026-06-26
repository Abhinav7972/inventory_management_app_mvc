# Inventory Management System

A modern, efficient inventory management application built with **Node.js** and the **MVC (Model-View-Controller)** architecture. This application streamlines stock tracking, warehouse operations, and inventory analytics with an intuitive user interface.

## 🎯 Project Overview

This inventory management system provides a robust solution for tracking and managing product inventory. Built with industry-standard patterns and technologies, it offers a clean separation of concerns through the MVC architecture, making the codebase maintainable and scalable.

### Key Features

- ✅ **Stock Tracking**: Real-time inventory monitoring and updates
- ✅ **Product Management**: Add, edit, and delete product information
- ✅ **MVC Architecture**: Clean code structure with separated concerns
- ✅ **Form Validation**: Express-validator for robust input validation
- ✅ **Responsive UI**: EJS templating with CSS styling
- ✅ **Scalable Design**: Easy to extend with new features

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **Express.js** | Backend framework | ^5.2.1 |
| **EJS** | Templating engine | ^6.0.1 |
| **Express-EJS-Layouts** | Layout management | ^2.5.1 |
| **Express-Validator** | Input validation | ^7.3.2 |
| **JavaScript** | Programming language | ES6+ |
| **CSS** | Styling | 3 |

### Language Composition
- **JavaScript**: 50.5%
- **EJS**: 31.5%
- **CSS**: 18%

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Abhinav7972/inventory_management_app_mvc.git
cd inventory_management_app_mvc



2. Install Dependencies
bash
npm install
3. Start the Application
bash
npm start
The application will be available at http://localhost:3000 (or the port specified in your configuration).

📁 Project Structure
Code
inventory_management_app_mvc/
├── models/              # Data models and database logic
├── views/               # EJS templates and UI components
├── controllers/         # Request handlers and business logic
├── routes/              # API routes and endpoints
├── public/              # Static files (CSS, images)
├── package.json         # Project dependencies
├── README.md            # This file
└── index.js             # Application entry point
🔧 Configuration
Ensure your application is configured with appropriate:

Port settings
Database connections (if applicable)
Validation rules
Environment variables
🎓 MVC Architecture
This project follows the Model-View-Controller pattern:

Models: Handle data logic and database operations
Views: EJS templates for rendering UI components
Controllers: Process requests and manage application flow
This separation ensures:

Clean code organization
Easy maintenance and testing
Scalability for future enhancements
📝 Usage Examples
Adding a New Product
Navigate to the "Add Product" section and fill in the required fields. The form will validate your input automatically.

Viewing Inventory
Access the dashboard to view all products in inventory with real-time stock levels.

Updating Stock
Quickly update stock quantities for any product in the system.




📚 Dependencies
All dependencies are listed in package.json:
{
  "ejs": "^6.0.1",
  "express": "^5.2.1",
  "express-ejs-layouts": "^2.5.1",
  "express-validator": "^7.3.2"
}