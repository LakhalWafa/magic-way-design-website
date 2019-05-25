import React from 'react';

const Checkmark = ({ Hovered }) => (
  <div
    style={
      Hovered
        ? { left: '4px', top: '4px', position: 'absolute', zIndex: '1' }
        : { display: 'none' }
    }
  />
);

const imgStyle = {
  transition: 'transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s'
};
const hoveredImageStyle = {
  transform: 'translateZ(0px) scale3d(0.9, 0.9, 1)',
  transition: 'transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s'
};
const cont = {
  backgroundColor: '#eee',
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative'
};

const HoveredImage = ({
  index,
  onClick,
  photo,
  margin,
  direction,
  top,
  left
}) => {
  //calculate x,y scale
  const sx = (100 - (30 / photo.width) * 100) / 100;
  const sy = (100 - (30 / photo.height) * 100) / 100;
  hoveredImageStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;

  if (direction === 'column') {
    cont.position = 'absolute';
    cont.left = left;
    cont.top = top;
  }
  return (
    <div
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
      className={!photo.selected ? 'not-selected' : ''}
    >
      <Checkmark selected={photo.selected ? true : false} />
      <img
        alt=""
        style={
          photo.selected
            ? { ...imgStyle, ...hoveredImageStyle }
            : { ...imgStyle }
        }
        {...photo}
        onClick={e => onClick(e, { index, photo })}
      />
      <style>{`.not-selected:hover{outline:2px solid #06befa;opacity:0.5}`}</style>
    </div>
  );
};

export default HoveredImage;
