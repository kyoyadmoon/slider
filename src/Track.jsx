import React from 'react';

const Track = ({className, included, offset, length}) => {
  const style = {
    bottom: offset + '%',
    height: length + '%',
    visibility: included ? 'visible' : 'hidden',
  };
  return <div className={className} style={style} />;
};

export default Track;
