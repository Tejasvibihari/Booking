import express from "express";
import { addHotel } from "../controllers/addHotel.controller.js";
import multer from "multer";

const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, hotelImage, cb) {
        cb(null, "uploads")
    },
    filename: function (req, hotelImage, cb) {
        cb(null, `${Date.now()}-${hotelImage.originalname}`);
    },
});
const upload = multer({ storage: storage });

router.post("/addHotel", upload.single('hotelImage'), addHotel);

export default router;

