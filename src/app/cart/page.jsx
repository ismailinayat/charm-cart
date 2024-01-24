"use client"
// pages/cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { addItem, clearCart, removeItem, decrement } from '@/store/cartSlice'; // Adjust the path based on your folder structure
import { Button } from '@mui/material';

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.items);


  let totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  let totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  let totalDiscountedAmount = cartItems.reduce((total, item) => total + item.discountedPrice * item.quantity, 0).toFixed(2)
  let totalDiscount = totalAmount - totalDiscountedAmount
  console.log('cartItems', cartItems)
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleIncrement = (item) => {
    // Implement logic to increase the quantity of the item in the cart
    dispatch(addItem(item));
  };

  const handleDecrement = (itemId) => {
    // Implement logic to decrease the quantity of the item in the cart
    dispatch(decrement(itemId))
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="subtitle1">Your cart is empty.</Typography>
      ) : (
        <Grid container spacing={2}>
          {cartItems.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Paper elevation={3} style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                {/* Left side: Item image */}
                <div style={{ marginRight: '10px' }}>
                  <img src={item.images[0]} alt={item.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                </div>

                {/* Right side: Item details */}
                <div style={{ flexGrow: 1 }}>
                  <Typography variant="h6">
                    {item.title}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    Price: ${item.discountedPrice}{' '}
                    <span style={{ textDecoration: 'line-through', color: '#757575' }}>
                      ${item.price.toFixed(2)}
                    </span>
                    <span style={{ marginLeft: '5px', color: '#4CAF50' }}>
                      ({item.discountPercentage}% Off)
                    </span>
                  </Typography>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={() => handleRemoveItem(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                    
                    <IconButton onClick={() => handleDecrement(item.id)}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1">
                      {item.quantity}
                    </Typography>
                    <IconButton onClick={() => handleIncrement(item)}>
                      <AddIcon />
                    </IconButton>
                  </div>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
      {cartItems.length > 0 && (
        <div>
          <Typography variant="h6">Cart Summary</Typography>
          <Typography variant="subtitle1">
            Total Items: {totalItems}
          </Typography>
          <Typography variant="subtitle1">
            Total Amount: ${totalAmount}
          </Typography>
          <Typography variant="subtitle1">
            Discounted Amount: ${totalDiscountedAmount}
          </Typography>
          <Typography variant="subtitle1">
            Total Discount: ${totalDiscount}
          </Typography>
          <div>
            <Button variant='outlined' className='mt-4' onClick={handleClearCart}>
              Clear Cart
            </Button>
            {/* Add checkout or other actions here */}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Cart;

