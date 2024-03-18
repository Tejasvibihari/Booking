import express from 'express';
import { getHotel } from '../controllers/getHotel.controller.js';

const router = express.Router();

router.get('/gethotels', getHotel);
// router.get('/getrooms', getRoom);

export default router;