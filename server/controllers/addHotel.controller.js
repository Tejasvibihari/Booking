import HotelData from '../models/hotelData.model.js';

export const addHotel = async (req, res) => {
    const { hotelName, address, city, state, zip, geolocation, description, hotelCategory, basePrice, mobile, amenities } = req.body;
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
            amenities: {
                swimmingPool: req.body.swimmingPool,
                gym: req.body.gym,
                restaurant: req.body.restaurant,
                spa: req.body.spa,
                parking: req.body.parking
            }
        });
        await newHotel.save();
        res.status(201).json({ newHotel, message: "Hotel Added Successfully" });
    } catch (error) {
        res.json(error)
    }
}