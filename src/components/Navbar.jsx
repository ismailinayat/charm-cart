"use client"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartItems = useSelector(state => state.cart.items)
  return (
    <AppBar position="static" className='mb-8'>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link href={'/'}>
          CharmCart
        </Link>
        </Typography>
        <IconButton color="inherit">
          <Link href={'/cart'}>
            <Badge badgeContent={cartItems.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
