import {Box, Stack, TextField, Typography} from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';
import {createTheme, ThemeProvider} from "@mui/material/styles";


export default function ChatField(props) {



    return (
            <Stack direction="column">
                <Box>
                    <TextField id="chat" label="Chat" variant="filled" maxRows={3} multiline={true} fullWidth={100}/>
                    <Stack direction="column">
                        {/*{props.comments.map((item, idx) => (*/}
                        {/*    <Typography>{item}</Typography>*/}
                        {/*))}*/}
                    </Stack>
                </Box>
            </Stack>
    )
}