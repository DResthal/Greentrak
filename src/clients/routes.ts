import express, { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// Get all
router.get("/", async (req, res) => {
  const clients = await prisma.client.findMany();
  res.status(200).json(clients);
});

// Get one
router.get("/:clientId", async (req, res) => {
  const { clientId } = req.params;
  const client = await prisma.client.findFirst({
    where: { clientId },
  });
  res.status(200).json(client);
});

router.post("/clients", async (req, res) => {
  const { name, streetAddress, state, zipcode, country, contactEmail, contactPhone } = req.body;
  try {
    await prisma.client.create({
      data: {
        name,
        streetAddress,
        state,
        zipcode,
        country,
        contactEmail,
        contactPhone,
      },
    });
    res.status(201).json({ created: "Client created." });
  } catch (e: any) {
    if (e.code === "P2002") {
      res.status(409).json({ failure: "Cannot create client, already exists." });
    } else {
      console.log(e);
      res.status(500).json({ error: e });
    }
  }
});

export default router;
