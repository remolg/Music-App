import { CheckCircle } from "@mui/icons-material"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Link, createMemoryRouter } from "react-router-dom"
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from "../utils/constanst"


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: 358, height: 180 }}
                />
            </Link>
        </Card>
    )
}

export default VideoCard