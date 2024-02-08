import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        // Fetch channel details from the API for the channelId
        fetchFromAPI(`channels?part=snippet&id=${id}`)
            .then((data) => setChannelDetail(data?.items[0]));

        // Fetch videos from the API for the channelId
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setVideos(data?.items));

    }, [id]);

    return (
        <Box
            minHeight='95vh'
        >
            <Box>
                <div
                    style={{
                        background: 'linear-gradient(29deg, rgba(80, 0, 108, 1) 12%, rgba(172, 1, 1, 1) 55%, rgba(247, 214, 7, 1) 100%)',
                        zIndex: 10,
                        height: '300px'
                    }}
                />
                <ChannelCard
                    channelDetail={channelDetail}
                    marginTop='-110px'
                />
            </Box>

            <Box display='flex' p='2'>
                <Box
                    sx={{ mr: { sm: '100px' } }}
                />
                <Videos videos={videos} />
            </Box>

        </Box>
    )
};

export default ChannelDetail;
