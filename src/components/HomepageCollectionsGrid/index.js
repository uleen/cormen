import React from 'react';

import { CollectionTile } from 'components/CollectionTile';

import { RemainingCollectiions } from './styles';

export const HomepageCollectionsGrid = ({ collections }) => {
  const saleCollection = collections.find(
    collection => collection.title === 'SALE'
  );
  const remainingCollections = collections.filter(
    collection => collection.title !== 'SALE'
  );

  return (
    <div>
      {!!saleCollection && (
        <CollectionTile
          sale
          destination={`/all-products?c=${encodeURIComponent(
            saleCollection.shopifyId
          )}`}
          backgroundImage={
            saleCollection.image?.localFile.childImageSharp.fluid
          }
          description={saleCollection.description}
          key={saleCollection.shopifyId}
          title={saleCollection.title}
        />
      )}
      <RemainingCollectiions>
        {remainingCollections.map(collection => (
          <CollectionTile
            destination={`/all-products?c=${encodeURIComponent(
              collection.shopifyId
            )}`}
            backgroundImage={collection.image?.localFile.childImageSharp.fluid}
            description={collection.description}
            key={collection.shopifyId}
            title={collection.title}
          />
        ))}
      </RemainingCollectiions>
    </div>
  );
};
