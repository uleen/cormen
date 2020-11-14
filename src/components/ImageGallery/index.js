import React, { useEffect } from 'react';
import Image from 'gatsby-image';
import { ImageGalleryWrapper } from './styles';
import ImageThumbnail from './ImageThumbnail';

export function ImageGallery({ images, selectedVariantImageId }) {
  const [activeImageThumbnail, setActiveImageThumbnail] = React.useState(
    images.find(({ id }) => id === selectedVariantImageId) || images[0]
  );

  useEffect(() => {
    setActiveImageThumbnail(
      images.find(({ id }) => id === selectedVariantImageId) || images[0]
    );
  }, [selectedVariantImageId, images, setActiveImageThumbnail]);

  const handleClick = image => {
    setActiveImageThumbnail(image);
  };

  return (
    <ImageGalleryWrapper>
      <div>
        <Image
          fluid={activeImageThumbnail.localFile.childImageSharp.fluid}
        ></Image>
      </div>
      <div>
        {images.map(image => {
          return (
            <ImageThumbnail
              key={image.id}
              isActive={activeImageThumbnail.id === image.id}
              image={image}
              onClick={handleClick}
            />
          );
        })}
      </div>
    </ImageGalleryWrapper>
  );
}
