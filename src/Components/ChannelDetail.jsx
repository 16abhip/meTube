import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import {Videos, ChannelCard} from './'
import { fetchFromAPI } from "../utils/fetchFromAPI"
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const {id} = useParams(); // see route, use to extract params of this route
  console.log(channelDetail);
  console.log(videos);
  useEffect(()=> {
      fetchFromAPI(`channels?part="snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
      <div style={{
          background: 'radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%, rgb(19, 30, 37) 24.5%, rgb(19, 30, 37) 66%)',
          zIndex: 10,
          height: '300px',
        }}/>
          <ChannelCard channelDetail={channelDetail} marginTop = '-110px'/>
      </Box>

      <Box display='flex' p='2'>
          <Box sx={{mr: {sm: '100px'}}} />
            <Videos videos={videos}/>
      </Box>
        
    </Box>
  )
}

export default ChannelDetail