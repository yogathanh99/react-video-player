import React from 'react';

import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import Nightmode from '../Nightmode';

import StylePLaylist from '../styles/StyledPlaylist';

const Playlist = props => {
  const { videos, active, nightModeCallback, nightMode } = props;
  return (
    <StylePLaylist>
      <Nightmode nightModeCallback={nightModeCallback} nightMode={nightMode} />
      <PlaylistHeader active={active} total={videos.length} />
      <PlaylistItems videos={videos} active={active} />
    </StylePLaylist>
  );
};

export default Playlist;
