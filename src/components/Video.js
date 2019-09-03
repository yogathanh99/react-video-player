import React from 'react';
import ReactPlayer from 'react-player';

import StyleVideo from './styles/StyledVideo';
import StyleVideoWrapper from './styles/StyledVideoWrapper';

const Video = props => {
  const { active, autoplay, endCallback, progressCallback } = props;
  return (
    <StyleVideo>
      <StyleVideoWrapper>
        <ReactPlayer
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: '0' }}
          playing={autoplay}
          controls={true}
          url={active.video}
          onEnded={endCallback}
          onProgress={progressCallback}
        />
      </StyleVideoWrapper>
    </StyleVideo>
  );
};

export default Video;
