import React, { useState } from 'react';

import { Input, Button } from 'components';
import { ProductQuantityAdderWrapper } from './styles';

export const ProductQuantityAdder = ({ available, variantId }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <ProductQuantityAdderWrapper>
      <strong>Quantity</strong>
      <form onSubmit={handleSubmit}>
        <Input
          disable={!available}
          min="1"
          step="1"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <Button type="submit" fullWidth>
          Add to cart
        </Button>
      </form>
    </ProductQuantityAdderWrapper>
  );
};
