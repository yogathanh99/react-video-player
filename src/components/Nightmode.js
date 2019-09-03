import React from 'react';

import StyleNightmode from './styles/StyledNightmode';

const Nightmode = props => {
  const { nightModeCallback, nightMode } = props;

  return (
    <StyleNightmode>
      <span>Nightmode: </span>
      <label className="switch">
        <input
          type="checkbox"
          checked={nightMode}
          onChange={nightModeCallback}
        />
        <span className="slider round" />
      </label>
    </StyleNightmode>
  );
};

export default Nightmode;
