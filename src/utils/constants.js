import MusicNoteIcon from '@mui/icons-material/MusicNote';
import {PersonalVideo} from "@mui/icons-material";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import UploadIcon from '@mui/icons-material/Upload';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';

export const categories = [
    {name: 'Upload Video', icon: <UploadIcon/>},
    {name: 'Your Storage', icon: <PersonalVideo/>},
    {name: 'Videos', icon: <VideoLibraryIcon/>},
];

export const adminCategories = [
    {name: 'Dash Board', icon: <ShowChartIcon/>},
    {name: 'User', icon: <ManageAccountsIcon/>},
    {name: 'Video', icon: <VideoSettingsIcon/>}
]

export const videoCat = {
    VIDEO: 'video',
}

export const USER = () => {
    return JSON.parse(localStorage.getItem('PiviUser'))
}

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'JavaScript Mastery';
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'