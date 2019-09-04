import React from 'react';
import StyledNightmode from './styles/StyledNightmode';

const NightMode = props => {
  const { nightModeCallback, nightMode } = props;

  return (
    <StyledNightmode>
      <span>Nightmode: </span>
      <label className="switch">
        <input
          type="checkbox"
          value="check"
          checked={nightMode}
          onChange={nightModeCallback}
        />
        <span className="slider round" />
      </label>
    </StyledNightmode>
  );
};

export default NightMode;
