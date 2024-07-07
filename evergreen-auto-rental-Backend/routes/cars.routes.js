import { Router } from "express";
import {addCarDetails } from "./controllers/car.controller.js"
const router = Router();

    router.post("/addcar", addCarDetails)
    


export default router;