import React from 'react';
import Image from 'gatsby-image';
import { ImageThumbnailWrapper } from './styles';

export default function ImageThumbnail({ isActive, onClick, image }) {
  const hanldeClick = () => {
    onClick(image);
  };

  return (
    <ImageThumbnailWrapper isActive={isActive} onClick={hanldeClick}>
      <Image fluid={image.localFile.childImageSharp.fluid} />
    </ImageThumbnailWrapper>
  );
}
