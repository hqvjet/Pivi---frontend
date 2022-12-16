import React from "react";
import { Stack, Box } from "@mui/material";

import { Loader, VideoCard } from "./index";

const Videos = props => {
  if(!props.videos?.length) return <Loader />;
  
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {props.videos.map((item, idx) => (
        <Box key={idx}>
          {item.id && <VideoCard video={item} /> }
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
