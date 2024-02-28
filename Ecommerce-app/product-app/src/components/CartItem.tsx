import {
  Box,
  Button,
  Card,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { ProductTypes } from "../types/ProductTypes";
import { roundToNearestHalf } from "../utils/roundToNearstHalf";
import { formatNumber } from "../utils/formatAmount";
import { Delete } from "@mui/icons-material";
import { useAppDispatch } from "../redux/hooks";
import { removeProduct } from "../redux/Slices/cartSlice";

interface CartItemProps extends ProductTypes {
  // Define your component props here
}

const CartItem = ({
  price,
  stock,
  discountPercentage,
  images,
  title,
  description,
  rating,
}: CartItemProps) => {
  const dispatch = useAppDispatch();
  const finalPrice = price - Math.round((price * discountPercentage) / 100);
  const userRating = roundToNearestHalf(rating);
  return (
    <Card
      sx={{
        display: "flex",
        columnGap: "10px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          columnGap: "10px",
        }}
      >
        <Box
          sx={{
            width: {
                xs:"8rem",
                md:'11.5rem'
            },
            background: "",
            borderTopRightRadius: "10px",
          }}
        >
          <CardMedia
            component="img"
            sx={{ height: {
                xs:'7.5rem',
                md:'11rem'
            }, width: {
                xs:'7.5rem',
                md:'11rem'
            } }}
            image={images[0]}
            alt={title}
          />
        </Box>
        <Box
          sx={{
            paddingTop: {
              lg: "15px",
            },
          }}
        >
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">
            {description.substring(0, 40)}...
          </Typography>
          <Typography variant="body2">Qty: {stock}</Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: "5px",
              marginY: "5px",
            }}
          >
            <Typography
              variant="body2"
              sx={{ textDecoration: "line-through", opacity: 0.7 }}
            >
              {formatNumber(price * 80)}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "600" }}>
              {formatNumber(finalPrice * 80)}
            </Typography>
            <Typography
              variant="body2"
              color="green"
              sx={{ fontSize: "17px", fontWeight: "600" }}
            >
              ({Math.round(discountPercentage)}% OFF)
            </Typography>
          </Box>
          <Rating value={userRating} precision={0.5} readOnly />
        </Box>
      </Box>
      <Box sx={{ marginRight: "10px" }}>
        <Button
          sx={{ color: "red" }}
          onClick={() => dispatch(removeProduct(title))}
        >
          <Delete />
        </Button>
      </Box>
    </Card>
  );
};

export default CartItem;
