import express from "express";
import { adminSignUp } from "../controllers/adminAuth.controller.js";


const router = express.Router();

router.post("/adminsignup", adminSignUp);
// router.post("/adminsignin", adminSignIn);

export default router;