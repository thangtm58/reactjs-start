import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {  // (props) // {} for a list
    const renderedList = videos.map((video) => {
        return <VideoItem
            key={video.id.videoId}
            onVideoSelect={onVideoSelect}
            video={video}
        />;
    });

    // props.videos
    return <div className="ui relaxed divided list">{renderedList}</div>;  // props.videos.length
};

export default VideoList;