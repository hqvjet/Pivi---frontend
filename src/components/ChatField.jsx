import {Box, Stack, TextField, Typography} from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {commentOnVideo} from "../api/user/Video";
import {useParams} from "react-router-dom";


export default function ChatField(props) {

    const {id} = useParams()

    const comment = e => {
        console.log(e.key)
        if(e.key === 'Enter') {
            commentOnVideo({
                video_id: id,
                content: document.getElementById('chat').value
            })
                .then(r => {
                    props.setAlert(r.data.message)
                    props.setOpen(true)
                })
                .catch(err => {
                    props.setAlert(err.data.msg)
                    props.setOpen(true)
                })
        }
    }

    return (
        <Stack direction="column">
                <TextField id="chat" label="Chat" variant="filled" maxRows={3} multiline={true} fullWidth
                    onKeyDown={comment}/>
                <Stack direction="column" sx={{color: 'white'}}>
                    {props.comments.map((item, idx) => (
                        <Stack key={idx} direction='column'>
                            <Typography><b>{item.user_id}</b></Typography>
                            <Typography>{item.content}</Typography>
                        </Stack>
                    ))}
                </Stack>
        </Stack>
    )
}