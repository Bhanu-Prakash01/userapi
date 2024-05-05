# User Management API

This is a simple user management API built using Node.js, Express, Mongoose, and Faker. The API provides endpoints to create, retrieve, and list users.

## Getting Started

1. Clone the repository:

```
git clone https://github.com/Bhanu-Prakash01/userapi.git
```

2. Install dependencies:

```
cd userapi
npm install
```

3. Create a `.env` file in the root directory and add your MongoDB connection string:

```
DB=mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
```

4. Start the server:

```
npm start
```

## API Endpoints

- `GET /`: Returns a message indicating that the API is working.
- `GET /users`: Retrieves a list of users. The response includes the total number of users, the current page, the limit per page, and the results for the current page.

## Usage

The API uses Faker to generate fake user data. You can uncomment the `createRandomUser` function and the code that generates and saves 100 fake users in the database.
