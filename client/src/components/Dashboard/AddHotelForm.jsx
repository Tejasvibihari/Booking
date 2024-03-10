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
import DialogContent from '@mui/material/DialogContent';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function FormDialog() {
    const { currentAdmin } = useSelector((state) => state.admin);
    const [open, setOpen] = React.useState(false);
    const [zip, setZip] = useState('');
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    const handlePinChange = (event) => {
        setZip(event.target.value);
    }

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

    const handleHotelSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const hotelData = {
            hotelName: data.get('hotelName'),
            address: data.get('address'),
            city: data.get('city'),
            state: data.get('state'),
            zip: data.get('zip'),
            geolocation: data.get('geolocation'),
            description: data.get('description'),
            hotelCategory: data.get('hotelCategory'),
            basePrice: data.get('basePrice'),
            mobile: data.get('mobile'),
            amenities: {
                swimmingPool: data.get('swimmingPool') === 'on' ? true : false,
                gym: data.get('gym') === 'on' ? true : false,
                restaurant: data.get('restaurant') === 'on' ? true : false,
                spa: data.get('spa') === 'on' ? true : false,
                parking: data.get('parking') === 'on' ? true : false
            },
            adminId: currentAdmin._id
        }
        const res = await axios.post("api/hotel/addHotel", hotelData);
        console.log(hotelData);
        console.log('Hotel Submitted');
    }

    return (
        <React.Fragment>
            <Paper className='max-w-sm h-auto' elevation={3}>
                <div className='flex flex-col justify-center items-center h-[250px]'>

                    <Button className='w-full h-full' onClick={handleClickOpen}>
                        <AddCircleIcon color="action" sx={{ fontSize: 70 }} />
                    </Button>
                    <Typography className='text-slate-800 font-roboto' gutterBottom align='center' variant="h4" component="h2">
                        Add Hotel
                    </Typography>
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
                                        required
                                    >
                                        <FormControlLabel control={<Checkbox name='swimmingPool' />} label="Swimming Pool" />
                                        <FormControlLabel control={<Checkbox name='gym' />} label="Gym" />
                                        <FormControlLabel control={<Checkbox name='restaurant' />} label="Restaurant" />
                                        <FormControlLabel control={<Checkbox name='spa' />} label="Spa" />
                                        <FormControlLabel control={<Checkbox name='parking' />} label="Parking" />
                                    </FormGroup>
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}

                            >
                                Add Hotel
                                {/* {loading ? "Please Wait..." : "Sign Up"} */}
                            </Button>
                        </Box>
                    </DialogActions>
                    <Button onClick={handleClose} color="error">Cancel</Button>
                </DialogContent>
            </Dialog>
        </React.Fragment >
    );
}