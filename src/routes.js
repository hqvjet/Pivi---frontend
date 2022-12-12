import {Box} from "@mui/material";
import {ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail} from "./components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import DashBoard from "./components/admin/DashBoard";
import Report from "./components/admin/Report";
import Video from './components/admin/Video'

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
                            <Route path='/1423asqwf3' element={<DashBoard/>}/>
                            <Route path='/1423asqwf3/user' element={<Report/>}/>
                            <Route path='/1423asqwf3/video' element={<Video/>}/>
                        </Routes>
                    </ThemeProvider>
                </Box>
            </BrowserRouter>
        </>
    )

}