import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Backdrop, Box, Button, IconButton, Snackbar, Typography} from "@mui/material";
import {useState} from "react";
import {uploadVideo} from "../api/user/Video";
import {Fragment} from "react";
import CloseIcon from "@mui/icons-material/Close";

const theme = createTheme({
    palette: {
        mode: 'dark'
    }
});

export default function Upload() {

    const [videoName, setVideoName] = useState('')
    const [thumbnailName, setThumbnailName] = useState('')
    const [display, setDisplay] = useState('none')
    const [video, setVideo] = useState({})
    const [thumbnail, setThumbnail] = useState({})
    const [open, setOpen] = useState(false)
    const [alert, setAlert] = useState('')

    const action = (
        <Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => setOpen(false)}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
        </Fragment>
    )

    const videoChanged = e => {
        setVideoName(e.target.files[0].name)
        setVideo(e.target.files[0])
        setDisplay('block')
    }

    const thumbnailChanged = e => {
        setThumbnailName(e.target.files[0].name)
        setThumbnail(e.target.files[0])
        setDisplay('block')
    }

    const handleSubmit = e => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        data.append('video', video)
        data.append('thumbnail', thumbnail)

        uploadVideo(data)
            .then(r => {
                setAlert(r.data.message)
                setOpen(true)
            })
            .catch(err => console.log(err.response.data))
    }

    return (
        <ThemeProvider theme={theme}>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                message={alert}
                onClose={() => setOpen(false)}
                action={action}
            />
            <Grid
                component='form'
                onSubmit={handleSubmit}
                noValidate
                container
                spacing={3}
                sx={{color: '#9E9E9E'}}>
                <Grid item xs={12} sm={12}>
                    <Typography sx={{color: 'gray'}}>Please upload video that doesn't exceed than 300Kb</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="title"
                        name="title"
                        label="Video's Title"
                        fullWidth
                        autoComplete="off"
                        variant="standard"
                    />
                </Grid>

                <Grid item xs={12} sm={12}>
                    <TextField
                        fullWidth
                        id="description"
                        label="Video's Description"
                        name='description'
                        multiline
                        maxRows={Infinity}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Button
                        variant="contained"
                        component="label"
                    >
                        Upload Video
                        <input
                            type="file"
                            hidden
                            accept='.mp4'
                            id='video'
                            name='video'
                            onChange={videoChanged}
                        />
                    </Button>
                    <Box marginTop={5}>
                        <Typography variant='h6' id='uploaded' display={display}>
                            {videoName}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Button
                        variant="contained"
                        component="label"
                    >
                        Upload Thumbnail
                        <input
                            type="file"
                            hidden
                            accept='.jpg,.png'
                            id='thumbnail'
                            name='thumbnail'
                            onChange={thumbnailChanged}
                        />
                    </Button>
                    <Box marginTop={5}>
                        <Typography variant='h6' id='uploaded' display={display}>
                            {thumbnailName}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes"/>}
                        label="By Clicking submit you agree with our TERMS AND CONDITIONS"
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        item
                    >Submit</Button>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
