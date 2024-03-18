import HotelData from "../models/hotelData.model.js";

export const getHotel = async (req, res) => {
    try {
        const getHotel = await HotelData.find();
        if (!getHotel) return res.status(404).json({ message: "No Hotel Found" });
        else return res.status(200).json(getHotel);
    } catch (error) {
        console.log(error);
    }
}

