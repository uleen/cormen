import React, { useContext } from 'react';

import { Layout, SEO } from 'components';
import ProductContext from 'context/ProductContext';
import { HomepageCollectionsGrid, FeaturedProducts } from 'components';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  const exactCollections = collections.filter(
    collection => collection !== 'Featured'
  );

  const featuredCollection = collections.find(
    collection => collection.title === 'Featured'
  );

  return (
    <Layout>
      <SEO description="Store main page" title="Home page" />
      <HomepageCollectionsGrid collections={exactCollections} />
      {featuredCollection && (
        <FeaturedProducts collection={featuredCollection} />
      )}
    </Layout>
  );
};

export default IndexPage;
