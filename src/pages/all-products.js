import React, { useContext } from 'react';
import queryString from 'query-string';
import { useLocation } from '@reach/router';

import { Content, Filters, Layout, ProductsGrid, SEO } from 'components';
import ProductContext from 'context/ProductContext';

const AllProducts = () => {
  const { products, collections } = useContext(ProductContext);
  const collectionProductMap = {};
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const selectedCollectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const selectedCollectionIdsMap = {};
  const searchTerm = qs.s;

  selectedCollectionIds.forEach(collectionId => {
    selectedCollectionIdsMap[collectionId] = true;
  });

  if (collections) {
    collections.forEach(collection => {
      collectionProductMap[collection.shopifyId] = {};
      collection.products.forEach(product => {
        collectionProductMap[collection.shopifyId][product.shopifyId] = true;
      });
    });
  }

  const filterByCategory = product => {
    if (Object.keys(selectedCollectionIdsMap).length) {
      for (let key in selectedCollectionIdsMap) {
        if (collectionProductMap[key]?.[product.shopifyId]) {
          return true;
        }
      }
      return false;
    }

    return true;
  };

  const filterBySearchTerm = product => {
    if (searchTerm) {
      return (
        product.title.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) >= 0
      );
    }

    return true;
  };

  const filteredProducts = products
    .filter(filterByCategory)
    .filter(filterBySearchTerm);

  return (
    <Layout>
      <SEO descripion="all products" title="all products" />
      {!!searchTerm && !!filteredProducts.length && (
        <h3>
          Search term: <strong>'{searchTerm}'</strong>
        </h3>
      )}
      {!!filteredProducts.length && <h4>{filteredProducts.length} products</h4>}
      <Content>
        <Filters collections={collections} />
        {!filteredProducts.length && (
          <div>
            <h3>
              <span>Oh no! Nothing matches</span>
              &nbsp;
              <strong>'{searchTerm}'</strong>
            </h3>
            <div>
              To help with your search why not to try:
              <br />
              <br />
              <ul>
                <li>Checking your spelling</li>
                <li>Less words</li>
                <li>Try using a different search term</li>
              </ul>
            </div>
          </div>
        )}
        {!!filteredProducts.length && (
          <div>
            <ProductsGrid products={filteredProducts} />
          </div>
        )}
      </Content>
    </Layout>
  );
};

export default AllProducts;
