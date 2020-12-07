import React from 'react';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';
import { Checkbox } from 'components';
import { CategoryFilterItemWrapper } from './styles';

export const CategoryFilterItem = ({ title, id }) => {
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const collectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const checked = collectionIds?.find(cId => cId === id);
  const searchTerm = qs.s;

  const onClick = () => {
    let navigetTo = '/all-products';

    let newIds = [];

    if (checked) {
      newIds = collectionIds
        .filter(cId => cId !== id)
        .map(cId => encodeURIComponent(cId));
    } else {
      collectionIds.push(id);
      newIds = collectionIds.map(cId => encodeURIComponent(cId));
    }
    if (newIds.length && !searchTerm) {
      navigate(`${navigetTo}?c=${newIds.join(',')}`);
    } else if (newIds.length && !!searchTerm) {
      navigate(
        `${navigetTo}?c=${newIds.join(',')}&s=${encodeURIComponent(searchTerm)}`
      );
    } else if (!newIds.length && !!searchTerm) {
      navigate(`${navigetTo}?s=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate(`${navigetTo}`);
    }
  };

  return (
    <CategoryFilterItemWrapper onClick={onClick}>
      <Checkbox checked={checked} />
      <div>{title}</div>
    </CategoryFilterItemWrapper>
  );
};
