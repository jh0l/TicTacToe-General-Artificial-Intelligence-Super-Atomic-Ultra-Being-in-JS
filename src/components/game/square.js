import React from 'react';

const Square = (props) => {
  const value = props.value || "";
  return (
    <input
      style={{"width": props.scale*50, "height":props.scale*50}}
      className={props.squareStyle}
      onClick={() => props.onClick()}
      type="button"
      value={value} />
  );
}

export default Square;
