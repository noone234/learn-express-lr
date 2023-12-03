const request = require("supertest");
const app = require("./app");

let userId;

describe("Test API hello world", () => {
    test("GET /", (done) => {
        request(app)
            .get("/")
            .expect(200)
            .expect("Content-Type", /text\/html/)
            .expect((res) => {
                res.body.data = "Hello world";
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });
});

describe("Test API users", () => {
    test("POST /users", async () => {
        const res = await request(app)
            .post("/users")
            .send({
                name: "Christopher Wolfe",
                email: "wolfe@example.com",
            });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id')

        userId = res.body.id;
    });

    test("PUT /users/:id", async () => {
        const res = await request(app)
            .put(`/users/${userId}`)
            .expect("Content-Type", /json/)
            .send({
                name: "Love Winter",
                email: "winter@example.com",
            })
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('id');
        expect(res.body.id).toBe(userId);
    });

    test("DELETE /users/:id", async () => {
        const res = await request(app)
            .delete(`/users/${userId}`);
        expect(res.statusCode).toBe(204);
    });
});

