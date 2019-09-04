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
  const savedVideos = JSON.parse(localStorage.getItem(`${videos.playlistId}`));

  const [state, setState] = useState({
    videos: savedVideos ? savedVideos.videos : videos.playlist,
    activeVideo: savedVideos ? savedVideos.activeVideo : videos.playlist[0],
    nightMode: savedVideos ? savedVideos.nightMode : true,
    playlistId: savedVideos ? savedVideos.playlistId : videos.playlistId,
    autoplay: false,
  });

  useEffect(() => {
    localStorage.setItem(`${state.playlistId}`, JSON.stringify({ ...state }));
  }, [state]);

  useEffect(() => {
    const videoId = match.params.activeVideo;
    if (videoId !== undefined) {
      const newActiveVideo = state.videos.findIndex(
        video => video.id === videoId,
      );
      setState(prevState => ({
        ...prevState,
        activeVideo: prevState.videos[newActiveVideo],
        autoplay: location.autoplay,
      }));
    } else {
      history.push({
        pathname: `/${state.activeVideo.id}`,
        autoplay: false,
      });
    }
  }, [
    history,
    location.autoplay,
    match.params.activeVideo,
    state.activeVideo.id,
    state.videos,
  ]);

  const nightModeCallback = () => {
    setState(prevState => ({
      ...prevState,
      nightMode: !prevState.nightMode,
    }));
  };

  const endCallback = () => {
    const videoId = match.params.activeVideo;
    const currentVideoIndex = state.videos.findIndex(
      video => video.id === videoId,
    );

    const nextVideo =
      currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1;

    history.push({
      pathname: `/${state.videos[nextVideo].id}`,
      autoplay: false,
    });
  };

  const progressCallback = e => {
    if (e.playedSeconds > 10) {
      setState(prevState => ({
        ...prevState,
        videos: prevState.videos.map(element =>
          element.id === prevState.activeVideo.id
            ? { ...element, played: true }
            : element,
        ),
      }));
    }
  };

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
            nightMode={state.nightMode}
            nightModeCallback={nightModeCallback}
          />
        </StyleWbnPlayer>
      ) : null}
    </ThemeProvider>
  );
};

export default WbnPlayer;
