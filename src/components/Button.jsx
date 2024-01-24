"use client"
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice';

const AddToCartButton = ({ title, product }) => {

    const cartItems = useSelector(state => state.cart.items)
    const dispatch = useDispatch();

    const handleAddToCart = () => {

        dispatch(addItem(product))
    }
    return (
        <Button variant="outlined" onClick={() => handleAddToCart()}>
            {title}
        </Button>
    );
};

export default AddToCartButton;