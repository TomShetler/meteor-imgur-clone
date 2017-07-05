import React, { Component } from 'react';

import ImageDetail from './ImageDetail';

const ImageList = (props) => {
  const validImages = props.images.filter((image) => {
    return !image.is_album;
  });
  const renderedImages = validImages.map((image) => {
    return <ImageDetail image={image} key={image.title}/>
  });

  return (
    <ul>
      {renderedImages}
    </ul>
  );
};

export default ImageList;
