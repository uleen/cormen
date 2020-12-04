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
