import React from 'react';
import { ProductTile } from 'components';

import { ProductsGridWrapper } from './styles';

export const ProductsGrid = ({ products }) => {
  return (
    <ProductsGridWrapper>
      {products.map(product => (
        <ProductTile
          description={product.description}
          imageFluid={product.images[0].localFile.childImageSharp.fluid}
          handle={product.handle}
          key={product.shopifyId}
          minPrice={product.priceRange.minVariantPrice.amount}
          title={product.title}
        />
      ))}
    </ProductsGridWrapper>
  );
};
