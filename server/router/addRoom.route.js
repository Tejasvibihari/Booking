import express from 'express';
import multer from "multer";

const router = express.Router();
const upload = multer();

router.post('/addroom', upload.single('image'), imageController.uploadImage);

export default router;

