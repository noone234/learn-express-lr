# learn-express-lr
Learn Express.js from LogRocket

https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/

I have taken their example further and added:
  - Docker container for Postgres

In the future I wish to add:
  - Tests
  - OpenAPI spec

# Usage

To start a Postgres server and DB:

```
docker-compose up -d postgres
```

To start the API server:

```
npm start
```

# Testing

Make API requests against http://localhost:3000, following LogRocket's blog at the top of this README file.
