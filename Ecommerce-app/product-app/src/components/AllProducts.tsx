import { Box, Container, Grid, Pagination, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Product from "./Product";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  pageChange,
  pageChangeWithData,
  selectPage,
  selectProduct,
} from "../redux/Slices/productSlice";
import { scrollToSection } from "../utils/scrollHelper";
import axios from "axios";
import CircularProgress from "@mui/material-next/CircularProgress";

const AllProducts = () => {
  const currentPage = useAppSelector(selectPage);
  const productData = useAppSelector(selectProduct);
  const dispatch = useAppDispatch();

  useEffect(() => {
    scrollToSection("all-product");
    async function calling() {
        const res = await axios.get(`http://localhost:3000/product-list/${currentPage}`);

        dispatch(pageChangeWithData(res.data.products));
      }
      calling();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = async (_: React.ChangeEvent<unknown>, value: number) => {
    scrollToSection("all-product");
    dispatch(pageChange(value));
    const response = await axios.get(
      `http://localhost:3000/product-list/${value}`
    );

    dispatch(pageChangeWithData(response.data.products));
  };
  return (
    <Box sx={{ width: "100%", background: "" }}>
      <Container maxWidth="xl">
        <Box sx={{ paddingTop: "8rem", background: "" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
              },
              justifyContent: "center",
              alignItems: {
                xs: "center",
              },
              columnGap: "3rem",
              rowGap: "1rem",
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                textAlign: "center",
                fontSize: {
                  xs: "40px",
                  md: "60px",
                },
              }}
              id="all-product"
            >
              All Products
            </Typography>

            {productData.length !== 0 ? (
              <Grid container spacing={3} sx={{ mt: "3rem" }}>
                {productData.map((el) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={el.title}>
                    <Product
                      description={el.description}
                      discountPercentage={el.discountPercentage}
                      image={el.images[0]}
                      price={el.price}
                      rating={el.rating}
                      title={el.title}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress color="primary" variant="indeterminate" />
              </Box>
            )}
            <Pagination
              count={5}
              page={currentPage}
              onChange={handleChange}
              sx={{ marginTop: "4rem" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AllProducts;
