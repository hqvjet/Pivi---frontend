import {Box} from "@mui/material";
import {ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail} from "./components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/Signin';
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import {createTheme, ThemeProvider} from "@mui/material/styles";

export default function Router() {

    const theme = createTheme({
        palette: {
            mode: 'dark'
        }
    })

    return (
        <>
            <BrowserRouter>
                <Box sx={{backgroundColor: '#000'}}>
                    <Navbar/>
                    <ThemeProvider theme={theme}>
                        <Routes>

                            <Route exact path='/' element={<Feed/>}/>
                            <Route path='/video/:id' element={<VideoDetail/>}/>
                            <Route path='/channel/:id' element={<ChannelDetail/>}/>
                            <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
                            <Route path='/sign-in' element={<SignIn/>}/>
                            <Route path='/sign-up' element={<SignUp/>}/>
                            <Route path='/1423asqwf3'/>
                        </Routes>
                    </ThemeProvider>
                </Box>
            </BrowserRouter>
        </>
    )

}