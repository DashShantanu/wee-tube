import React from 'react';
import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard } from './'

const Videos = ({ videos }) => {

    return (
        <Stack
            direction='row'
            flexWrap='wrap'
            justifyContent='start'
            gap={2}
        >
            {
                videos.map((item, idx) => (
                    <Box
                        key={idx}
                    >
                        {/* Render either a video card or channel detail card according to each data in list */}
                        {
                            item.id.videoId &&
                            <VideoCard video={item} />
                        }
                        {
                            item.id.channelId &&
                            <ChannelCard channelDetail={item} />
                        }
                    </Box>
                ))
            }
        </Stack>
    )
};

export default Videos;
