# Users API

This project is a simple API for managing users. It is built with Node.js, Express, MySQL, and other dependencies to handle user data in a database.

## Features

- User CRUD operations (Create, Read, Update, Delete)

## Tech Stack

- Node.js
- Express.js
- MySQL
- CORS
- Swagger for API documentation
- Jest fot API testing

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v12 or higher)
- npm (Node Package Manager)
- MySQL or a MySQL-compatible database

### Installation

1. Clone the repository:
   git clone https://github.com/fadelrazh/users-api.git

2. Navigate into the project directory:
   cd users-api

3. Install the required dependencies:
   npm install

4. Create a .env file in the root directory and define the following environment variables:
   DB_HOST=your_database_host
   DB_USER=your_database_username
   DB_PASS=your_database_password
   DB_NAME=your_database_name

5. Run the application:
   npm start

#### API Documentation

You can access the Swagger API documentation at:
http://localhost:3000/api-docs

##### Running Tests

npm test
