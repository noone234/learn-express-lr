const request = require("supertest");
const app = require("./app");

describe("Test API", () => {
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
