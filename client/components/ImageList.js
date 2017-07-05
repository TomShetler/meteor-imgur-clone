import React, { Component } from 'react';

import ImageDetail from './ImageDetail';

const IMAGES = [
  { title: 'Rick', link: 'https://dummyimage.com/600x400' },
  { title: 'And', link: 'https://dummyimage.com/600x400' },
  { title: 'Morty', link: 'https://dummyimage.com/600x400' },
];

const ImageList = () => {
  const images = IMAGES.map((image) => {
    return <ImageDetail image={image} key={image.title}/>
  });

  return (
    <ul>
      {images}
    </ul>
  );
};

export default ImageList;
