import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Box, Button, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {useState} from "react";

const theme = createTheme({
    palette: {
        mode: 'dark'
    }
});

export default function Upload() {

    const [fileName, setFileName] = useState('')
    const [category, setCategory] = useState('')
    const [display, setDisplay] = useState('none')

    const categorySelected = e => {
        setCategory(e.target.value)
    }

    const fileChanged = e => {
        setFileName(e.target.files[0].name)
        setDisplay('block')
    }

    const handleSubmit = e => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        console.log('lmao')
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid
                component='form'
                onSubmit={handleSubmit}
                noValidate
                container
                spacing={3}
                sx={{color: '#9E9E9E'}}>
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
                <Grid item xs={12} sm={6}>
                    <FormControl sx={{
                        width: '250px',
                        color: '#9E9E9E'
                    }}>
                        <InputLabel id="hashtag-label">Category</InputLabel>
                        <Select
                            labelId="hashtag-label"
                            id="hashtag"
                            value={category}
                            label="Category"
                            onChange={categorySelected}
                        >
                            <MenuItem value='Entertainment'>Entertainment</MenuItem>
                            <MenuItem value='Music'>Music</MenuItem>
                            <MenuItem value='Gaming'>Gaming</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <TextField
                        fullWidth
                        id="description"
                        label="Video's Description"
                        multiline
                        maxRows={Infinity}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Button
                        variant="contained"
                        component="label"
                    >
                        Upload File
                        <input
                            type="file"
                            hidden
                            accept='.mp4'
                            id='fileInput'
                            onChange={fileChanged}
                        />
                    </Button>
                    <Box marginTop={5}>
                        <Typography variant='h6' id='uploaded' display={display}>
                            {fileName}
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
                        component='label'
                        xs={12} sm={6}
                        item
                    >Submit</Button>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
