import express from "express";
import { config } from "dotenv";
import usersRouter from "./routes/users.routes.js";
import carsRouter from "./routes/cars.routes.js"
import cors from 'cors';

config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials:true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/cars", carsRouter );

app.listen(3000, () => {
  console.log("server is running on port 3000...");
});
