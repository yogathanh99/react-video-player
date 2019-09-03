import React from 'react';

import StylePlaylistHeader from './styles/StyledPlaylistHeader';
import StyleJourney from './styles/StyledJourney';

const PlaylistHeader = props => {
  const { active, total } = props;
  return (
    <StylePlaylistHeader>
      <p>{active.title}</p>
      <StyleJourney>
        {active.number}/{total}
      </StyleJourney>
    </StylePlaylistHeader>
  );
};

export default PlaylistHeader;
