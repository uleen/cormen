import React, { useState, useContext } from 'react';

import { Input, Button } from 'components';
import CartContext from 'context/CartContext';
import { ProductQuantityAdderWrapper } from './styles';

export const ProductQuantityAdder = ({ available, variantId }) => {
  const [quantity, setQuantity] = useState(1);
  const { updateLineItem } = useContext(CartContext);

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
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
