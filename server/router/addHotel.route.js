import express from "express";
import { addHotel } from "../controllers/addHotel.controller.js";


const router = express.Router();

router.post("/addHotel", addHotel);

export default router;