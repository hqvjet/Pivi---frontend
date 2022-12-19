import {Box, Stack, TextField, Typography} from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {commentOnVideo} from "../api/user/Video";
import {useParams} from "react-router-dom";
import {convertDateToDay} from "../utils/Algorithm";


export default function ChatField(props) {

    const {id} = useParams()
    const user = JSON.parse(localStorage.getItem('PiviUser'))

    const comment = e => {
        if (e.key === 'Enter') {
            commentOnVideo({
                video_id: id,
                content: document.getElementById('chat').value
            })
                .then(r => {
                    props.setAlert(r.data.message)
                    props.setOpen(true)
                    window.location.reload()
                })
                .catch(err => {
                    if (!JSON.parse(localStorage.getItem('PiviUser')))
                        window.location.href = '/sign-in'
                    else {
                        props.setAlert(err.response.data.msg)
                        props.setOpen(true)
                        document.getElementById('chat').value = ''
                    }
                })
        }
    }

    return (
        <Stack direction="column">
            <TextField id="chat" label="Chat" variant="filled" maxRows={3} multiline={true} fullWidth
                       onKeyDown={comment}/>
            <Stack direction="column" sx={{color: 'white'}}>
                {props.comments?.length === 0 && (
                    <Typography variant='h6' sx={{color: 'gray'}} p={2}>This video has no comment</Typography>
                )}
                {props.comments.map((item, idx) => (
                    <Stack key={idx} direction='column' p={2}>
                        <Stack direction='row' gap={2} display='flex' alignItems='center'>
                            <Typography sx={{
                                backgroundColor: user?.username === item?.user ? 'gray' : 'transparent',
                                padding: '1px 5px',
                                borderRadius: '10px'
                            }}><b>{item?.user}</b></Typography>
                            <Typography
                                sx={{color: 'gray', fontSize: '0.8em'}}>{convertDateToDay(item?.create_at)}</Typography>
                        </Stack>
                        <Typography>{item.content}</Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}