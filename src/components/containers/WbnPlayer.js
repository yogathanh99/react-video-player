import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import Video from '../Video';
import PLaylist from './Playlist';
import StyleWbnPlayer from '../styles/StyledWbnPlayer';

const theme = {
  bgcolor: '#353535',
  bgcolorItem: '#414141',
  bgcolorItemActive: '#405c63',
  bgColorPlayed: '#526d4e',
  border: 'none',
  borderPlayer: 'none',
  color: '#fff',
};

const themeLight = {
  bgcolor: '#fff',
  bgcolorItem: '#fff',
  bgcolorItemActive: '#80a7b1',
  bgColorPlayed: '#7d9979',
  border: '1px solid #353535',
  borderPlayer: 'none',
  color: '#353535 ',
};

const WbnPlayer = props => {
  const { match, history, location } = props;
  const videos = JSON.parse(document.querySelector('[name="videos"]').value);
  const [state, setState] = useState({
    videos: videos.playlist,
    activeVideo: videos.playlist[0],
    nightMode: true,
    playlistId: videos.playlistId,
    autoplay: false,
  });

  useEffect(() => {
    const videoId = match.params.activeVideo;
    if (videoId !== undefined) {
      const newActiveVideo = state.videos.findIndex(
        video => video.id === videoId,
      );
      setState(prev => ({
        ...prev,
        activeVideo: prev.videos[newActiveVideo],
        autoplay: location.autoplay,
      }));
    } else {
      props.history.push({
        pathname: `/${state.activeVideo.id}`,
        autoplay: false,
      });
    }
  }, [history, location.autoplay, match.params.activeVideo, props.history, props.match.params.activeVideo, state.activeVideo.id, state.videos]);

  const nightModeCallback = () => {};

  const nightMode = () => {};

  const endCallback = () => {};

  const progressCallback = () => {};

  return (
    <ThemeProvider theme={state.nightMode ? theme : themeLight}>
      {state.videos !== null ? (
        <StyleWbnPlayer>
          <Video
            active={state.activeVideo}
            autoplay={state.autoplay}
            endCallback={endCallback}
            progressCallback={progressCallback}
          />
          <PLaylist
            videos={state.videos}
            active={state.activeVideo}
            nightMode={nightMode}
            nightModeCallback={nightModeCallback}
          />
        </StyleWbnPlayer>
      ) : null}
    </ThemeProvider>
  );
};

export default WbnPlayer;
