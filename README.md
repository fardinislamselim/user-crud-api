# User CRUD REST API

An Express.js and TypeScript REST API using Prisma ORM and MongoDB.

## Requirements

- Node.js 20 or later
- pnpm
- A MongoDB database, such as a MongoDB Atlas cluster

## Setup

1. Install dependencies:

   ```sh
   pnpm install
   ```

2. Copy `.env.example` to `.env` and replace the `DATABASE_URL` value with your MongoDB connection string. Keep `.env` private; do not commit database credentials.

3. Generate the Prisma client and synchronize the schema:

   ```sh
   pnpm db:generate
   pnpm db:push
   ```

4. Start the development server:

   ```sh
   pnpm dev
   ```

The server starts at `http://localhost:5000` by default. Run `pnpm build` and then `pnpm start` for a production build.

## User model

| Field | Type | Requirement |
| --- | --- | --- |
| `id` | String | MongoDB ObjectId |
| `name` | String | Required |
| `email` | String | Required and unique |
| `age` | Int | Required, non-negative |

## API endpoints

All endpoints use the `/api/users` base path and exchange JSON.

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/users` | Create a user |
| `GET` | `/api/users` | List all users |
| `GET` | `/api/users/:id` | Get one user by MongoDB ObjectId |
| `PATCH` | `/api/users/:id` | Update one or more user fields |
| `DELETE` | `/api/users/:id` | Delete a user |

Create a user with:

```json
{
  "name": "Rahim",
  "email": "rahim@gmail.com",
  "age": 22
}
```

Update selected fields with:

```json
{
  "name": "Rahim Ahmed",
  "age": 23
}
```

Successful responses use a JSON envelope with `success`, `message`, and `data`. Invalid input returns `400`, a missing user returns `404`, and a duplicate email returns `409`.

## Postman

Import `postman/User CRUD API.postman_collection.json` into Postman. Set `baseUrl` to `http://localhost:5000/api/v1`; run the create request first to store `userId`, then run the get, update, and delete requests. Use the collection to exercise all five endpoints and capture the screenshots required for submission.
