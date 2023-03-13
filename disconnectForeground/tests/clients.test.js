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
describe("Testing /clients", () => {
    describe("Given a GET request to /clients", () => {
        test("return a 200 status code", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request(app).get("/clients");
            expect(res.statusCode).toBe(200);
        }));
        test("return JSON as the content-type", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request(app).get("/clients");
            expect(res.headers["content-type"]).toMatch(/json/);
        }));
    });
    describe("Given GET request to /clients with a clientId", () => {
        test("return a 200 status code", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield request(app).get("/clients/");
        }));
    });
});
