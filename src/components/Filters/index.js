import React from 'react';
import { CategoryFilterItem } from './CategoryFilterItem';
import { FilterWrapper } from './styles';

export const Filters = ({ collections }) => {
  return (
    <FilterWrapper>
      <strong>Категории</strong>
      {collections.map(collection => (
        <CategoryFilterItem
          id={collection.shopifyId}
          key={collection.shopifyId}
          title={collection.title}
        />
      ))}
    </FilterWrapper>
  );
};
