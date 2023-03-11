import request from 'supertest';
import app from '../app.js';

describe("Testing /products", () => {
   describe("Given a GET request", () => {

      test("return a 200 status code", async () => {
         const response = await request(app).get("/products");
         expect(response.statusCode).toBe(200);
      })

      test("return JSON as the content-type", async () => {
         const response = await request(app).get("/products");
         expect(response.headers['content-type']).toMatch(/json/);
      })
   })

   describe("Given a GET request and a valid product id", () => {
      test("return a 200 status code", async () => {
         const res = await request(app).get("/products/1");
         expect(res.statusCode).toBe(200);
      })
      test("return the product queried", async () => {
         const res = await request(app).get("/products/1");
         expect(Number(res.body["id"])).toBe(1);
      })
   })
})