import express from 'express';
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
   const clients = await prisma.client.findMany();
   res.status(200).json(clients);
})

router.get("/:id", async (req, res) => {
   const { id } = req.params;
   const client = await prisma.client.findFirst({
      where: { id: Number(id) }
   });
   res.status(200).json(client);
})

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
            contactPhone
         }
      });
      res.status(201).json({created: "Client created."});
   } catch (e) {
      if (e.code === "P2002") {
         res.status(409).json({failure: "Cannot create client, already exists."});
      } else {
         console.log(e);
         res.status(500).json({error: e});
      }
   }
})

export default router;