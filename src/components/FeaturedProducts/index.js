import React from 'react';

import { ProductsGrid } from 'components/ProductsGrid';

export const FeaturedProducts = ({ collection }) => {
  return (
    <section>
      <h1>Featured</h1>
      <ProductsGrid products={collection.products} />
    </section>
  );
};
