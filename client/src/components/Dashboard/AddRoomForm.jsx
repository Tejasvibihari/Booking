import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import FormLabel from '@mui/material/FormLabel';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useRef } from 'react';

import { useParams } from 'react-router-dom';
import { addRoomStart, addRoomSuccess, addRoomFailure, storeRoomData } from '../../app/admin/roomSlice';

export default function FormDialog() {
    // const { currentAdmin } = useSelector((state) => state.room);
    const { rLoading, rSuccess } = useSelector((state) => state.room);
    const [snackopen, setsnackOpen] = useState(false);

    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const imageRef = useRef(null);
    const [roomImage, setRoomImage] = useState(null);

    const { id } = useParams();


    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setRoomImage(reader.result);
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


    // To Handle Form Open And Close 
    const handleClickOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
    };




    const handleRoomSubmit = async (event) => {
        event.preventDefault();
        try {
            dispatch(addRoomStart());
            const form = event.currentTarget;
            const formData = new FormData();
            formData.append('hotelId', id);
            formData.append('roomType', form.elements.roomType.value);
            formData.append('amenities', JSON.stringify({
                swimmingPool: form.elements.swimmingPool.checked,
                wifi: form.elements.wifi.checked,
                ac: form.elements.ac.checked,
                gym: form.elements.gym.checked,
                restaurant: form.elements.restaurant.checked,
                spa: form.elements.spa.checked,
                parking: form.elements.parking.checked,
                tv: form.elements.tv.checked,
            }));
            formData.append('acPrice', form.elements.acPrice.value);
            formData.append('poolPrice', form.elements.poolPrice.value);
            formData.append('roomImage', imageRef.current.files[0]);
            try {
                const res = await axios.post('/api/hotel/addroom', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('Room added successfully');
                console.log(res.data.newRoom);
                handleClose();
                handleSnackClick();
                dispatch(addRoomSuccess(res.data.newRoom));
                console.log(res)
                dispatch(storeRoomData(res.data.room));
            } catch (error) {
                console.error('Error adding room:', error);
                dispatch(addRoomFailure(error.message));
                console.log(error.message);
            }
        } catch (error) {
            console.log(error)
            dispatch(addRoomFailure(error.message));
        }
    };


    return (
        <React.Fragment>
            <Snackbar
                open={snackopen}
                autoHideDuration={6000}
                onClose={handlesnackClose}
                message={rSuccess ? "Room Added Successfully" : "Something Went Wrong"}
                action={action}

            />
            <Paper className='max-w-sm h-auto' elevation={3}>
                <div className='flex flex-col justify-center items-center h-[250px]'>

                    <Button className='w-full h-full' onClick={handleClickOpen}>
                        <AddCircleIcon color="action" sx={{ fontSize: 70 }} />
                    </Button>
                    <Typography className='text-slate-800 font-roboto' gutterBottom align='center' variant="h4" component="h2">
                        Add Room
                    </Typography>
                </div>
            </Paper>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Add Room</DialogTitle>
                <DialogContent>
                    <DialogActions>
                        <Box component="form" onSubmit={handleRoomSubmit} noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="roomType"
                                        required
                                        fullWidth
                                        id="roomType"
                                        label="Room Type"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="poolPrice"
                                        label="Pool Price"
                                        name="poolPrice"
                                        autoComplete="price"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="acPrice"
                                        label="A.C Price"
                                        name="acPrice"
                                        autoComplete="price"
                                    />
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
                                <Box mt={2} className="px-1">
                                    <input name='roomImage' type="file" accept="image/*" ref={imageRef} hidden onChange={handleImageChange} />
                                    <div onClick={() => imageRef.current.click()} className='bg-[#F1EFF2] flex w-20 h-20 justify-center items-center border-[1px] border-slate-300 cursor-pointer'>
                                        {roomImage ? (
                                            <img src={roomImage} alt="Room" style={{ maxWidth: '100%', maxHeight: '100%' }} />
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
                                {rLoading ? "Please Wait..." : "Add Room"}
                            </Button>
                        </Box>
                    </DialogActions>
                    <Button onClick={handleClose} color="error">Cancel</Button>
                </DialogContent>
            </Dialog>
        </React.Fragment >
    );
}