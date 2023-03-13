var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import { PrismaClient } from "@prisma/client";
const router = express.Router();
const prisma = new PrismaClient();
// Get all
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clients = yield prisma.client.findMany();
    res.status(200).json(clients);
}));
// Get one
router.get("/:clientId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { clientId } = req.params;
    const client = yield prisma.client.findFirst({
        where: { clientId },
    });
    res.status(200).json(client);
}));
router.post("/clients", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, streetAddress, state, zipcode, country, contactEmail, contactPhone } = req.body;
    try {
        yield prisma.client.create({
            data: {
                name,
                streetAddress,
                state,
                zipcode,
                country,
                contactEmail,
                contactPhone
            }
        });
        res.status(201).json({ created: "Client created." });
    }
    catch (e) {
        if (e.code === "P2002") {
            res.status(409).json({ failure: "Cannot create client, already exists." });
        }
        else {
            console.log(e);
            res.status(500).json({ error: e });
        }
    }
}));
export default router;
