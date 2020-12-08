import React from 'react';
import BackgroundImage from 'gatsby-background-image';

import { StyledLink } from 'components';
import {
  CollectionTileWrapper,
  CollectionTileContent,
  Title,
  Description,
} from './styles';

export const CollectionTile = ({
  backgroundImage,
  description,
  destination,
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
          <StyledLink to={destination}>Купить сейчас</StyledLink>
        </div>
      </CollectionTileContent>
    </CollectionTileWrapper>
  );
};
