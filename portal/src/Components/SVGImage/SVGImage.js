import React from 'react';

const SVGImage = (props) => {
  const style = {};

  if (props.color) {
    style.color = props.color;
  }

  if (props.width) {
    style.width = props.width;
  }

  if (props.height) {
    style.height = props.height;
  }

  if (typeof props.src === 'string') {
    return (
      <img src={props.src} style={{ ...style, ...props.style }} className={props.className} alt={props.alt} id={props.id} />
    );
  }

  const Image = props.src;

  return (
    <Image />
  );
};

export default SVGImage;
