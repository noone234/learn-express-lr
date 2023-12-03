# learn-express-lr
Learn how to develop a RESTful API with Express.js and PostgreSQL.

When this repo started, I was folllowing [a tutorial on LogRocket's blog](https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/) from Tania Rascia.

Since then I have taken that example further and added:
  - Docker container for Postgres
  - Tests

In the future I wish to add:
  - OpenAPI spec
  - sad path tests (e.g. invalid API request)

# Usage

To start a Postgres server and DB:

```
docker-compose up -d postgres
```

To start the API server:

```
npm start
```

At this point, the service will be listening for API requests at:
```
http://localhost:3000
```

# Testing

## Automated tests

```
npm test
```

This will run a suite of tests against API endpoints. The tests leverage Jest and Supertest.

## Manual tests

Make API requests against http://localhost:3000, following LogRocket's blog at the top of this README file.
