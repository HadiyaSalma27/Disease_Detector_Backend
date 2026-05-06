import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import marketRoutes from "./routes/market.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", marketRoutes);

const PORT = 3000||process.env.port;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});