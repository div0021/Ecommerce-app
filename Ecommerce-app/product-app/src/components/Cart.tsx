import { AddShoppingCart } from "@mui/icons-material";
import { Box, Button, Drawer, Skeleton, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  cartData,
  onClose,
  onOpen,
  selectOpen,
} from "../redux/Slices/cartSlice";
import CartItem from "./CartItem";
import { formatNumber } from "../utils/formatAmount";
import { useNavigate } from "react-router-dom";
import { Suspense } from "react";

const Cart = () => {
  const open = useAppSelector(selectOpen);
  const cartProduct = useAppSelector(cartData);
  const price: number[] = [];

  cartProduct.forEach((el) => {
    const finalPrice =
      el.price - Math.round((el.price * el.discountPercentage) / 100);
    price.push(finalPrice);
  });
  const totalPrice = price.reduce((acc, el) => (acc += el), 0);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Button
          variant="text"
          aria-label="cart"
          sx={{ minWidth: "30px", p: "4px", color: "white" }}
          onClick={() => {
            dispatch(onOpen());
          }}
        >
          <AddShoppingCart sx={{ width: "20px" }} />
        </Button>
      </Box>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => {
          dispatch(onClose());
        }}
      >
        <Box
          sx={{
            minWidth: "60dvw",
            maxWidth: "85dvw",
            p: 2,
            backgroundColor: "background.paper",
            flexGrow: 1,
          }}
        >
          <Box component="div">
            <Typography
              variant="h4"
              sx={{
                fontSize: "40px",
                color: "rgb(61,102,205)",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              Cart
            </Typography>
          </Box>

          {cartProduct.length !== 0 ? (
            <>
              <Box
                sx={{
                  background: "",
                  height: "32rem",
                  overflowY: "auto",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "10px",
                  }}
                >
                  {cartProduct.map((el) => (
                    <Suspense fallback={<Skeleton variant="rectangular" />}>
                      <CartItem
                        key={el.title}
                        brand={el.brand}
                        category={el.category}
                        stock={el.stock}
                        description={el.description}
                        discountPercentage={el.discountPercentage}
                        images={el.images}
                        price={el.price}
                        rating={el.rating}
                        title={el.title}
                      />
                    </Suspense>
                  ))}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  rowGap: "10px",
                  background: "",
                  height: "5rem",
                  flexDirection: "row",
                  items: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  key={"9876554"}
                  sx={{
                    padding: "20px",
                    fontSize: {
                      xs: "20px",
                      sm: "24px",
                    },
                    fontWeight: "600",
                  }}
                >
                  Total: {formatNumber(totalPrice * 80)}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      marginRight: "20px",
                      height: {
                        xs: "2rem",
                        sm: "2.5rem",
                      },
                    }}
                    variant="contained"
                    onClick={() => navigate("/checkout")}
                  >
                    Continue
                  </Button>
                </Box>
              </Box>{" "}
            </>
          ) : (
            <Box
              sx={{
                height: "37rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h5" sx={{ textDecoration: "underline" }}>
                cart is empty
              </Typography>
            </Box>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default Cart;
