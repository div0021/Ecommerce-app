import Product from "./Product";
// import productData from "../data/products.json";
import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import { ProductTypes } from "../types/ProductTypes";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material-next/CircularProgress";

const TopProducts = () => {
  //   const topProducts: ProductTypes[] = [];
  //   productData.products.forEach((item, index) => {
  //     if (index < 10) {
  //       topProducts.push({ ...item, images: item.images[0] });
  //     }
  //   });
  const [topProducts, setTopProducts] = useState<ProductTypes[]>([]);

  useEffect(() => {
    async function calling() {
      const res = await axios.get("http://localhost:3000/product-list/1");
    //   console.log(res.data);
      setTopProducts(res.data.products);
    }
    calling();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Container maxWidth="xl" sx={{ overflow: "hidden" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginY: { xs: "1.5rem", sm: "2rem", md: "4rem", lg: "8rem" },
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            fontWeight="600"
            sx={{ fontSize: { xs: "34px", sm: "48px", lg: "60px" } }}
            id="top_product"
          >
            Our Treading Products
          </Typography>
        </Box>

        {topProducts.length !== 0 ? (
          <Grid container spacing={3}>
            {topProducts.map((el) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={el.title}>
                <Suspense
                  fallback={
                    <Skeleton variant="rectangular" width={210} height={180} />
                  }
                >
                  <Product
                    description={el.description}
                    discountPercentage={el.discountPercentage}
                    image={el.images[0]}
                    price={el.price}
                    rating={el.rating}
                    title={el.title}
                  />
                </Suspense>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress color="primary" variant="indeterminate" />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default TopProducts;
