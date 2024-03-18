import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Radio from '@mui/material/Radio';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DialogContent from '@mui/material/DialogContent';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addHotelFailure, addHotelStart, storeHotelData, hotelSuccessNotification } from '../../app/admin/hotelSlice';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useRef } from 'react';




export default function FormDialog() {
    const { currentAdmin } = useSelector((state) => state.admin);
    const { hloading, hsuccess } = useSelector((state) => state.hotel);
    const [snackopen, setsnackOpen] = useState(false);
    const imageRef = useRef(null);

    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [zip, setZip] = useState('');
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [hotelImage, setHotelImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setHotelImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    // Snack bar Handle Open And Close 
    const handleSnackClick = () => {
        setsnackOpen(true);
    };

    const handlesnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setsnackOpen(false);
    };
    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handlesnackClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    // Getting  The Zip code  value from form 
    const handlePinChange = (event) => {
        setZip(event.target.value);

    }

    // To Handle Form Open And Close 
    const handleClickOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleBlur = useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://api.postalpincode.in/pincode/${zip}`);
            setCity(response.data[0].PostOffice[0].District);
            setState(response.data[0].PostOffice[0].State);
        }
        fetchData();
    }, [zip, city, state]);

    const id = currentAdmin._id;

    const handleHotelSubmit = async (event) => {
        event.preventDefault();
        try {
            dispatch(addHotelStart());
            const form = event.currentTarget;
            const data = new FormData();

            data.append('adminId', id);
            data.append('hotelName', form.elements.hotelName.value);
            data.append('address', form.elements.address.value);
            data.append('city', form.elements.city.value);
            data.append('state', form.elements.state.value);
            data.append('zip', form.elements.zip.value);
            data.append('geolocation', form.elements.geolocation.value);
            data.append('description', form.elements.description.value);
            data.append('hotelCategory', form.elements.hotelCategory.value);
            data.append('basePrice', form.elements.basePrice.value);
            data.append('mobile', form.elements.mobile.value);
            data.append('discount', form.elements.discount.value);
            data.append('rating', form.elements.rating.value);
            data.append('hotelLocation', JSON.stringify({
                hillStation: form.elements.hillStation.checked,
                beach: form.elements.beach.checked,
                spritual: form.elements.spritual.checked,
                weakend: form.elements.weakend.checked,
            }));

            data.append('amenities', JSON.stringify({
                swimmingPool: form.elements.swimmingPool.checked,
                gym: form.elements.gym.checked,
                restaurant: form.elements.restaurant.checked,
                spa: form.elements.spa.checked,
                parking: form.elements.parking.checked,
                wifi: form.elements.wifi.checked,
                tv: form.elements.tv.checked,
                ac: form.elements.ac.checked
            }));
            data.append('hotelImage', imageRef.current.files[0]);
            console.log(imageRef.current.files[0])
            console.log(data)
            const res = await axios.post("api/hotel/addHotel", data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(res)
            if (res.data.message === "Hotel Added Successfully") {
                dispatch(storeHotelData(res.data.newHotel))
                dispatch(hotelSuccessNotification());
                handleClose()
                handleSnackClick()
            }
            else {
                console.log("Hello")
            }
        } catch (error) {
            dispatch(addHotelFailure(error.message))
            console.log(error)
        }
    }


    return (
        <React.Fragment>
            <Snackbar
                open={snackopen}
                autoHideDuration={6000}
                onClose={handlesnackClose}
                message={hsuccess ? "Hotel Added Successfully" : "Something Went Wrong"}
                action={action}

            />
            <Paper className='max-w-[180px] h-auto' elevation={3}>
                <div className='flex flex-row justify-start items-center'>
                    <div>
                        <Button className='' onClick={handleClickOpen}>
                            <AddCircleIcon color="action" sx={{ fontSize: 50 }} />
                        </Button>
                    </div>
                    <div>
                        <Typography className='text-slate-800 font-roboto' align='center' variant="h5" component="h2">
                            Add Hotel
                        </Typography>
                    </div>
                </div>
            </Paper>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Add Hotel</DialogTitle>
                <DialogContent>
                    <DialogActions>
                        <Box component="form" onSubmit={handleHotelSubmit} noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="hotelName"
                                        required
                                        fullWidth
                                        id="hotelName"
                                        label="Hotel Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="zip"
                                        label="Zip"
                                        type="text"
                                        id="zip"
                                        autoComplete="pincode"
                                        onBlur={handleBlur}
                                        onChange={handlePinChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="city"
                                        label="City"
                                        type="text"
                                        id="city"
                                        autoComplete="city"
                                        value={city}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="state"
                                        label="State"
                                        type="text"
                                        id="state"
                                        autoComplete="state"
                                        value={state}

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="address"
                                        label="address"
                                        name="address"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="geolocation"
                                        label="Google Map Link"
                                        name="geolocation"
                                        autoComplete="geolocation"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="description"
                                        label="Description"
                                        name="description"
                                        autoComplete="description"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="mobile"
                                        label="Mobile Number"
                                        name="mobile"
                                        autoComplete="mobile"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="basePrice"
                                        label="Base Price"
                                        name="basePrice"
                                        autoComplete="price"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        id="discount"
                                        label="Discount"
                                        name="discount"
                                        autoComplete="discount"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="rating"
                                        label="Rating"
                                        name="rating"
                                        autoComplete="rating"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label">Hotel Category</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="hotelCategory"
                                            required
                                        >
                                            <FormControlLabel value="luxury" control={<Radio />} label="Luxury" />
                                            <FormControlLabel value="budget" control={<Radio />} label="Budget" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormLabel id="demo-radio-buttons-group-label">Hotel Amenities</FormLabel>
                                    <FormGroup
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="amenities"
                                    >
                                        <FormControlLabel control={<Checkbox name='swimmingPool' />} label="Swimming Pool" />
                                        <FormControlLabel control={<Checkbox name='gym' />} label="Gym" />
                                        <FormControlLabel control={<Checkbox name='restaurant' />} label="Restaurant" />
                                        <FormControlLabel control={<Checkbox name='spa' />} label="Spa" />
                                        <FormControlLabel control={<Checkbox name='parking' />} label="Parking" />
                                        <FormControlLabel control={<Checkbox name='wifi' />} label="WiFi" />
                                        <FormControlLabel control={<Checkbox name='tv' />} label="T.V" />
                                        <FormControlLabel control={<Checkbox name='ac' />} label="A.c" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormLabel id="demo-radio-buttons-group-label">Hotel Location</FormLabel>
                                    <FormGroup
                                        row
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="hotelLocation"
                                    >
                                        <FormControlLabel control={<Checkbox name='hillStation' />} label="Hill Station" />
                                        <FormControlLabel control={<Checkbox name='beach' />} label="Beach" />
                                        <FormControlLabel control={<Checkbox name='spritual' />} label="Spritual" />
                                        <FormControlLabel control={<Checkbox name='weakend' />} label="Weakend" />
                                    </FormGroup>
                                </Grid>
                                <Box mt={2} className="px-1">
                                    <input name='hotelImage' type="file" accept="image/*" ref={imageRef} hidden onChange={handleImageChange} />
                                    <div onClick={() => imageRef.current.click()} className='bg-[#F1EFF2] flex w-20 h-20 justify-center items-center border-[1px] border-slate-300 cursor-pointer'>
                                        {hotelImage ? (
                                            <img src={hotelImage} alt="Hotel" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                                        ) : (
                                            <AddPhotoAlternateIcon />
                                        )}
                                    </div><div className='text-sm text-gray-600'>Hotel Image</div>
                                </Box>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}

                            >
                                {hloading ? "Please Wait..." : "Add Hotel"}
                            </Button>
                        </Box>
                    </DialogActions>
                    <Button onClick={handleClose} color="error">Cancel</Button>
                </DialogContent>
            </Dialog>
        </React.Fragment >
    );
}