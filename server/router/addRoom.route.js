import express from 'express';
import multer from "multer";
import { addRoom } from '../controllers/addRoom.controller.js';
import { getRoom } from '../controllers/addRoom.controller.js';

const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, roomImage, cb) {
        cb(null, "uploads")
    },
    filename: function (req, roomImage, cb) {
        cb(null, `${Date.now()}-${roomImage.originalname}`);
    },
});
const upload = multer({ storage: storage });

router.post('/addroom', upload.single('roomImage'), addRoom);
router.get("/getroom/:id", getRoom);

export default router;

