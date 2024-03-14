import roomData from '../models/roomData.model.js';

export const addRoom = async (req, res) => {
    const { roomType, acPrice, poolPrice } = req.body;
    const { swimmingPool, wifi, ac, gym, restaurant, spa, parking, tv } = req.amenities;

    try {
        const newImage = new Image({
            roomType: roomType,
            acPrice: acPrice,
            poolPrice: poolPrice,
            swimmingPool: swimmingPool,
            wifi: wifi,
            ac: ac,
            gym: gym,
            restaurant: restaurant,
            spa: spa,
            parking: parking,
            tv: tv,
            image: req.file.buffer,
            contentType: req.file.mimetype,
        });
        await newImage.save();
        res.status(201).send('Image uploaded successfully');
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).send('Error uploading image');
    }
};
