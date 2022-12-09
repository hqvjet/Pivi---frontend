import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
// import Textarea from '@mui/joy/Textarea';

const theme = createTheme({
    palette: {
        mode: 'dark'
    }
});

export default function Upload() {
    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={3}>
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
                        width: '250px'
                    }}>
                        <InputLabel id="hashtag-label">Category</InputLabel>
                        <Select
                            labelId="hashtag-label"
                            id="hashtag"
                            value={12}
                            label="Category"
                            // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
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
                <Grid item xs={12} sm={6}>
                    <Button
                        variant="contained"
                        component="label"
                    >
                        Upload File
                        <input
                            type="file"
                            hidden
                        />
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes"/>}
                        label="Use this address for payment details"
                    />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
