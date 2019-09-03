import React from 'react';

import withLink from '../hoc/withLink';
import PlaylistItem from '../PlaylistItem';
import StylePlaylistitems from '../styles/StyledPlaylistitems';

const PLaylistItemHOC = withLink(PlaylistItem);

const PlaylistItems = props => {
  const { videos, active } = props;
  return (
    <StylePlaylistitems>
      {videos.map(video => (
        <PLaylistItemHOC
          key={video.id}
          video={video}
          active={video.id === active.id ? true : false}
          played={video.played}
        />
      ))}
    </StylePlaylistitems>
  );
};

export default PlaylistItems;
