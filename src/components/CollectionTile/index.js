import React from 'react';
import BackgroundImage from 'gatsby-background-image';

import {
  CollectionTileWrapper,
  CollectionTileContent,
  Title,
  Description,
} from './styles';

export const CollectionTile = ({
  backgroundImage,
  description,
  title,
  sale,
}) => {
  return (
    <CollectionTileWrapper>
      <BackgroundImage fluid={backgroundImage} />
      <CollectionTileContent>
        <div>
          <Title sale={sale}>{title}</Title>
          <Description sale={sale}>{description}</Description>
        </div>
      </CollectionTileContent>
    </CollectionTileWrapper>
  );
};
