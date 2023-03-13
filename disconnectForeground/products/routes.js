var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import { PrismaClient } from "@prisma/client";
const router = express.Router();
const prisma = new PrismaClient();
// Get all
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield prisma.product.findMany();
    res.json(products);
}));
// Get one
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield prisma.product.findFirst({
        where: { id: Number(id) },
    });
    res.status(200);
    res.send(product);
}));
// Add one
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, germination, harvest, seedCost } = req.body;
    console.log(req.body);
    try {
        yield prisma.product.create({
            data: {
                name,
                germination,
                harvest,
                seedCost
            }
        });
        res.status(201).json({ message: "Product created" });
    }
    catch (e) {
        if (e.code === "P2002") {
            res.status(400).json({ message: `Product ${name} already exists.` });
        }
    }
}));
// Update one
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, germination, harvest, seedCost } = req.body;
    const product = yield prisma.product.update({
        where: { id: Number(id) },
        data: {
            name,
            germination,
            harvest,
            seedCost,
        },
    });
    res.json(product);
}));
// Delete one
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield prisma.product.delete({
        where: {
            id: Number(id),
        },
    });
    res.json(product);
}));
export default router;
