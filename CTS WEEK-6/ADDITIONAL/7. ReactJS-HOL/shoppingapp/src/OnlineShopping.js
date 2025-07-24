import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  render() {
    const cartItems = [
      { Itemname: 'Mobile', Price: 15000 },
      { Itemname: 'Headphones', Price: 2000 },
      { Itemname: 'Shoes', Price: 3000 },
      { Itemname: 'Backpack', Price: 1200 },
      { Itemname: 'Watch', Price: 2500 }
    ];

    return (
      <div style={{ padding: '20px' }}>
        <h2>Online Shopping Cart</h2>
        {cartItems.map((item, index) => (
          <Cart key={index} Itemname={item.Itemname} Price={item.Price} />
        ))}
      </div>
    );
  }
}

export default OnlineShopping;
