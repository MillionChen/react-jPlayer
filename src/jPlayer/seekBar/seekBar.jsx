import React from 'react';

import { classes } from '../../util/constants';

const SeekBar = ({ setBar, onClick, onMouseDown, onTouchStart,
  seekPercent, children, attributes }) => (
    <div
      {...attributes} ref={setBar} className={classes.SEEK_BAR}
      style={{ width: `${seekPercent}%` }} onClick={onClick}
      onTouchStart={onTouchStart} onMouseDown={onMouseDown}
    >
      {children}
    </div>
);

SeekBar.defaultProps = {
  setBar: null,
  onClick: null,
  onMouseDown: null,
  onTouchStart: null,
  attributes: null,
};

SeekBar.propTypes = {
  attributes: React.PropTypes.node,
  seekPercent: React.PropTypes.number.isRequired,
  setBar: React.PropTypes.func,
  onClick: React.PropTypes.func,
  onMouseDown: React.PropTypes.func,
  onTouchStart: React.PropTypes.func,
  children: React.PropTypes.node.isRequired,
};

export default SeekBar;
