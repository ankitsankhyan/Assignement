# Book Management API

This is a simple Express.js API for managing books. It provides endpoints for creating, retrieving, updating, and deleting books.

## Installation

Before running the API, make sure to install the required dependencies using npm:

```bash
npm install
```

## Usage

To start the API, you can use the following command:

```bash
npm start
```

The API will run on `http://localhost:3000`.

## Routes

### 1. Get List of Books

- **Route**: GET `/api`
- **Description**: Retrieve a list of all books.
- **Request**: No request body is required.
- **Response**: An array of book objects.

### 2. Create a New Book

- **Route**: POST `/api`
- **Description**: Create a new book entry.
- **Request**:
  - Method: POST
  - Body: JSON object with book details including "title," "author," and "description."
- **Response**: The newly created book object.

### 3. Delete a Book

- **Route**: DELETE `/api/:bookId`
- **Description**: Delete a book by its unique ID.
- **Request**:
  - Method: DELETE
  - Params: `bookId` - The unique ID of the book to delete.
- **Response**: A message indicating the success of the deletion.

### 4. Get a Book by ID

- **Route**: GET `/api/:bookId`
- **Description**: Retrieve a specific book by its unique ID.
- **Request**:
  - Method: GET
  - Params: `bookId` - The unique ID of the book to retrieve.
- **Response**: The book object matching the provided ID.

### 5. Update a Book

- **Route**: PUT `/api/:bookId`
- **Description**: Update a book by its unique ID.
- **Request**:
  - Method: PUT
  - Params: `bookId` - The unique ID of the book to update.
  - Body: JSON object with updated book details, including "title," "author," and "description."
- **Response**: The updated book object.

## Dependencies

This project uses the following Node.js packages:

- `express`: A web application framework for Node.js.
- `express-validator`: Middleware for request data validation.
- `mongoose`: An Object Data Modeling (ODM) library for MongoDB.
- `cors`: Middleware for enabling Cross-Origin Resource Sharing.
- `dotenv`: A zero-dependency module for loading environment variables.
- `morgan`: Middleware for HTTP request logging.
- `nodemon`: A tool for automatically restarting the server during development.

