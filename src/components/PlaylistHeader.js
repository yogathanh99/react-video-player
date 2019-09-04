import React from 'react';

import StylePlaylistHeader from './styles/StyledPlaylistHeader';
import StyleJourney from './styles/StyledJourney';

const PlaylistHeader = props => {
  const { active, total } = props;
  return (
    <StylePlaylistHeader>
      <p>{active.title}</p>
      <StyleJourney>
        {active.num}/{total}
      </StyleJourney>
    </StylePlaylistHeader>
  );
};

export default PlaylistHeader;
