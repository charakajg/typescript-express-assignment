# TypeScript Express Server Assignment

This is a basic Express.js server refactored to TypeScript. It has a mock database represented by an array of user objects and exposes two API endpoints to retrieve and save a user by ID. The main server code is in [src/server.ts](https://github.com/charakajg/typescript-express-assignment/blob/main/src/server.ts)

## Improvements

The following improvements were made:

- Refactored the server from JavaScript to TypeScript for better type safety and improved code readability.
- Improved the existing GET endpoint to use Array find() method instead of loops
- Introduced a POST endpoint for saving a user record.
- Moved the initial data to a separate JSON file to better separate data from logic.
- Updated the error handling to a global handler to handle errors more effectively and consistently.
- Grouped HTTP status codes under an enum to avoid using magic numbers and improve readability.
- Allowed the port number to be set from the command line for flexibility.
- Moved shared interfaces to a separate types file for better organization.
- Moved error messages to a separate strings.ts file for easy management and potential localization.
- Introduced Jest for testing to ensure the correct functionality of the server.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- An HTTP client like curl or Postman to test the API

### Installing

#### Clone the repository to your local machine:

`git clone git@github.com:charakajg/typescript-express-assignment.git`

#### Navigate to the project directory:

`cd typescript-express-assignment`

#### Install the project dependencies:

`npm install`

#### Compile and start the server:

`npm start`

#### Running Tests

Tests are written using Jest. Run them with the following command:

`npm test`

## API Endpoints

### `GET /users/:id`

Retrieves a user by their ID. You can test this with curl using the following command:

`curl -X GET http://localhost:<your_port>/users/<user_id>`

Example: `curl -X GET http://localhost:3000/users/1`

### `POST /users`

Saves a new user record. The request body should be a JSON object with id and name properties. You can test this with curl using the following command:

`curl -X POST -H "Content-Type: application/json" -d '{"id":<id>,"name":"<name>"}' http://localhost:<your_port>/users`

Example: `curl -X POST -H "Content-Type: application/json" -d '{"id":3,"name":"Charlie"}' http://localhost:3000/users`

Replace `<your_port>` with the port number your server is running on (`3000` by default) and `<user_id>`, `<id>` and `<name>` with the actual values.

## Error Handling

The server has a global error handler that sends a response with the appropriate HTTP status code and a message describing the error.

### HTTP Status Codes

The server uses the following HTTP status codes:

- 200: OK
- 201: Created
- 404: Not Found
- 500: Internal Server Error

## Limitations

The following issues have not been addressed by the improvements:

- The data will be lost when you restart the server as it's stored with an in-memory array
- The end points have not been protected by any authentication mechanism
