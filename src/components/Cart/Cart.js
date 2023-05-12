import React from 'react';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

function Cart() {
  return (
    <div>
      <h2>Cart</h2>
      <CartItem />
      <CartTotal />
    </div>
  );
}

export default Cart;
