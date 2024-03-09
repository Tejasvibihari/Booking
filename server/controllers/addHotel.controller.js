import hotelData from '../models/hotelData.model';

export const addHotel = async (req, res) => {
    const { hotelName, address, city, state, zip, geolocation, description, hotelCategory, price, email, mobile } = req.body;
    const adminId = req.user._id;
    try {
        const newHotel = new hotelData({
            adminId: adminId,
            hotelName: hotelName,
            address: address,
            city: city,
            state: state,
            zip: zip,
            geolocation: geolocation,
            description: description,
            hotelCategory: hotelCategory,
            price: price,
            email: email,
            mobile: mobile,
        });
        await newHotel.save();
    } catch (error) {
        res.json(error)
    }
}