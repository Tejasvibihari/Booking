import HotelData from '../models/hotelData.model.js';
import RoomData from '../models/roomData.model.js';

export const addHotel = async (req, res) => {
    const { hotelName, address, city, state, zip, geolocation, description, hotelCategory, basePrice, mobile } = req.body;
    const { swimmingPool, gym, restaurant, spa, parking, wifi, tv, ac } = req.body.amenities
    const { hillStation, beach, spritual, weakend } = req.body.hotelLocation;
    const adminId = req.body.adminId;
    try {
        const newHotel = new HotelData({
            adminId: adminId,
            hotelName: hotelName,
            address: address,
            city: city,
            state: state,
            zip: zip,
            geolocation: geolocation,
            description: description,
            hotelCategory: hotelCategory,
            basePrice: basePrice,
            mobile: mobile,
            hotelLocation: {
                hillStation: hillStation,
                beach: beach,
                spritual: spritual,
                weakend: weakend,
            },
            amenities: {
                swimmingPool: swimmingPool,
                gym: gym,
                restaurant: restaurant,
                spa: spa,
                parking: parking,
                wifi: wifi,
                tv: tv,
                ac: ac
            }
        });
        await newHotel.save();
        res.status(201).json({ newHotel, message: "Hotel Added Successfully" });
    } catch (error) {
        res.json(error)
        console.log(error)
    }
}

