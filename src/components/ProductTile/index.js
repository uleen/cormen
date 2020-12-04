import React from 'react';
import Img from 'gatsby-image';

import { StyledLink } from 'components/StyledLink';
import { ProductTileWrapper, Description, Title, Price } from './styles';

export const ProductTile = ({
  title,
  imageFluid,
  description,
  minPrice,
  handle,
}) => {
  return (
    <ProductTileWrapper>
      <Img fluid={imageFluid} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>От {parseFloat(minPrice).toFixed(2)} ₽</Price>
      <StyledLink to={`/products/${handle}`}>Посмотреть</StyledLink>
    </ProductTileWrapper>
  );
};
