var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import request from 'supertest';
import app from '../app.js';
describe("Testing /products", () => {
    describe("Given a GET request", () => {
        test("return a 200 status code", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request(app).get("/products");
            expect(response.statusCode).toBe(200);
        }));
        test("return JSON as the content-type", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield request(app).get("/products");
            expect(response.headers['content-type']).toMatch(/json/);
        }));
    });
    describe("Given a GET request and a valid product id", () => {
        test("return a 200 status code", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request(app).get("/products/1");
            expect(res.statusCode).toBe(200);
        }));
        test("return the product queried", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request(app).get("/products/1");
            expect(Number(res.body["id"])).toBe(1);
        }));
    });
});
