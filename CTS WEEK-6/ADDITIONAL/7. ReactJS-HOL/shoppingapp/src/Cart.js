import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <div style={{ border: '1px solid #aaa', padding: '10px', margin: '10px', borderRadius: '5px' }}>
        <h3>Item: {this.props.Itemname}</h3>
        <p>Price: ₹{this.props.Price}</p>
      </div>
    );
  }
}

// Default Props
Cart.defaultProps = {
  Itemname: 'Unknown Item',
  Price: 0
};

export default Cart;
