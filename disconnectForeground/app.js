import express from "express";
import bodyParser from "body-parser";
import productRoutes from "./products/routes";
import clientRoutes from "./clients/routes";
const app = express();
app.use(bodyParser.json());
app.use("/products", productRoutes);
app.use("/clients", clientRoutes);
export default app;
