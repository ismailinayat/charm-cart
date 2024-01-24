import Grid from '@mui/material/Grid';
import ProductCard from '@/components/ProductCard';
import SearchInput from '@/components/Search';
import Link from 'next/link';
import CustomPagination from '@/components/Pagination';
export default async function Home(props) {

  console.log(props)
  let {p, search, category} = props.searchParams;

  let limit = 10;
  let page = p ? p : 1;
  let skip = (page - 1) * limit;
  // let search = props?.searchParams?.search
  // let category = props?.searchParams?.category

  let url = search ? `https://dummyjson.com/products/search?q=${search}` : category ? `https://dummyjson.com/products/category/${category}` : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`

  const data = await fetch(url);

  const dataJson = await data.json()

  console.log('data json', dataJson)

  const {products, total} = dataJson;
  let categoriesRes = await fetch('https://dummyjson.com/products/categories')
  let categories = await categoriesRes.json();
  // console.log('categories', await categoriesRes.json())

  return (

    <>
      <Grid container spacing={2} className="product-list">
        {/* Left side: Categories */}
        <Grid item xs={12} md={3}>
          <div className="categories">
            {categories.map((category) => (
              <div key={category}>
                <Link href={`/?category=${category}`}>
                  {category}
                </Link>
              </div>
            ))}
          </div>
        </Grid>

        {/* Right side: Product list */}
        <Grid item xs={12} md={9}>
          <SearchInput />
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item md={12} lg={6} xl={4} key={product.id}>
                <ProductCard {...product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Custom Pagination */}
      <Grid container justifyContent="center" style={{ marginTop: '20px', marginBottom: '20px' }}>
        <CustomPagination total={total} skip={skip} limit={limit} />
      </Grid>
    </>
  );
}
