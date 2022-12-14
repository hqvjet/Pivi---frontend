import {Box} from "@mui/material";
import {Feed, Navbar, SearchFeed, VideoDetail} from "./components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import DashBoard from "./components/admin/DashBoard";

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
                            <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
                            <Route path='/sign-in' element={<SignIn/>}/>
                            <Route path='/sign-up' element={<SignUp/>}/>
                            <Route path='/1423asqwf3' element={<DashBoard/>}/>
                        </Routes>
                    </ThemeProvider>
                </Box>
            </BrowserRouter>
        </>
    )

}