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
    <div>
      <div className="header">
        <img src="http://i.imgur.com/HnJkrC5.gif"/>
      </div>
      <ul>
        {renderedImages}
      </ul>
    </div>
  );
};

export default ImageList;
