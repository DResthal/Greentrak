import express from "express";
import bodyParser from "body-parser";
import productsRoutes from "./products/routes.js";
import clientRoutes from "./clients/routes.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use("/products", productsRoutes);
app.use("/clients", clientRoutes);

export default app;
