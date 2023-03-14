import request from "supertest";
const app = require("../app");

describe("Testing /clients", () => {
  describe("Given a GET request to /clients", () => {
    test("return a 200 status code", async () => {
      const res = await request(app).get("/clients");
      expect(res.statusCode).toBe(200);
    });

    test("return JSON as the content-type", async () => {
      const res = await request(app).get("/clients");
      expect(res.headers["content-type"]).toMatch(/json/);
    });
  });

  describe("Given GET request to /clients with a clientId", () => {
    test("return a 200 status code", async () => {
      const res = await request(app).get("/clients/");
    });
  });
});
