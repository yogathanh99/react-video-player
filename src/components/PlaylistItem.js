import React from 'react';
import StyledPlaylistItem from './styles/StyledPlaylistItem';

const PlaylistItem = props => {
  const { video, active, played } = props;
  return (
    <StyledPlaylistItem active={active} played={played}>
      <div className="wbn-player__video-nr">{video.num}</div>
      <div className="wbn-player__video-name">{video.title}</div>
      <div className="wbn-player__video-time">{video.duration}</div>
    </StyledPlaylistItem>
  );
};

export default PlaylistItem;
