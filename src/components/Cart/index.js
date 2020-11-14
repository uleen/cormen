import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import CartContext from 'context/CartContext';
import { CartWrapper } from './styles';

export const Cart = () => {
  const { checkout } = useContext(CartContext);
  let totalQuantity = 0;
  if (checkout) {
    checkout.lineItems.forEach(lineItem => {
      totalQuantity = totalQuantity + lineItem.quantity;
    });
  }

  return (
    <CartWrapper>
      <FaShoppingCart size="1.5em" />
      <div>
        {totalQuantity} item(s) / {checkout?.totalPrice || '0.00'} ₽
      </div>
    </CartWrapper>
  );
};
