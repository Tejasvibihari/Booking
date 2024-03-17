import RoomData from '../models/roomData.model.js';
// import HotelData from '../models/hotelData.model.js';




export const addRoom = async (req, res) => {
    const { roomType, acPrice, poolPrice, hotelId } = req.body;
    const amenities = JSON.parse(req.body.amenities);
    const { swimmingPool, wifi, ac, gym, restaurant, spa, parking, tv } = amenities;

    try {
        const addRoom = new RoomData({
            roomType: roomType,
            acPrice: acPrice,
            poolPrice: poolPrice,
            amenities: {
                swimmingPool: swimmingPool,
                wifi: wifi,
                ac: ac,
                gym: gym,
                restaurant: restaurant,
                spa: spa,
                parking: parking,
                tv: tv,
            },
            roomImage: req.file.filename,
            hotelId: hotelId
        });
        const newRoom = await addRoom.save();
        const room = await RoomData.find({ hotelId });
        res.status(201).json({ newRoom, room, message: 'Room added successfully' });

    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).send('Error uploading image');
    }
};

export const getRoom = async (req, res) => {
    try {
        const room = await RoomData.find({ hotelId: req.params.id });
        res.status(200).json(room);
        console.log(room)
    } catch (error) {
        res.send(error);
    }
}