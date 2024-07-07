import { Router } from "express";
import {createUser, loginUser} from "./controllers/user.controllers.js"
import {addCarDetails } from "./controllers/car.controller.js"
import {validateInfo } from "../middleware/users.middleware.js"
const router = Router();


    router.post("/register", validateInfo, createUser)
    router.post("/login",loginUser)
    


export default router;