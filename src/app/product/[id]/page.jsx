
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import ProductImageSlider from '@/components/ProductImageSlider';
import AddToCartButton from '@/components/Button';
import { Grid, Paper } from '@mui/material';

export default async function ProductDetail({params}) {

  const {id} = params
  const data = await fetch(`https://dummyjson.com/products/${id}`);

  const product = await data.json()

  const discountedPrice = (product.price - ((product.price * product.discountPercentage) / 100)).toFixed();

  return (
    <Grid container columnSpacing={10} marginTop={5}>
      {/* Left side: ProductImageSlider */}
      <Grid item xs={12} md={6}>
        <ProductImageSlider images={product.images} />
      </Grid>

      {/* Right side: Product details */}
      <Grid item xs={12} md={6}>
        {/* <Paper elevation={3} style={{ padding: '20px' }}> */}
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Description: {product.description}
          </Typography>
          <Typography variant="h6" color="primary">
            Price: ${discountedPrice}{' '}
            <span style={{ textDecoration: 'line-through', color: '#757575' }}>
              ${product.price.toFixed(2)}
            </span>
            <span style={{ marginLeft: '5px', color: '#4CAF50' }}>
              ({product.discountPercentage}% Off)
            </span>
          </Typography>
          <Typography variant="body2" gutterBottom>
            Rating:{' '}
            <Rating name="read-only" value={product.rating} readOnly precision={0.1} />
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Brand: {product.brand}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Stock: {product.stock}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Category: {product.category}
          </Typography>
          <div style={{ marginTop: '20px' }}>
            <AddToCartButton title="Add To Cart" product={{...product, discountedPrice}} />
          </div>
        {/* </Paper> */}
      </Grid>
    </Grid>
  );
}
