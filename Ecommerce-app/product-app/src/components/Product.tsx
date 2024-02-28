import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { formatNumber } from "../utils/formatAmount";
import { roundToNearestHalf } from "../utils/roundToNearstHalf";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  // Define your component props here
  title: string;
  description: string;
  image: string;
  rating: number;
  price: number;
  discountPercentage: number;
}

const Product = ({
  description,
  discountPercentage,
  image,
  price,
  rating,
  title,
}: ProductProps) => {
  const navigate = useNavigate();
  const finalPrice = price - Math.round((price * discountPercentage) / 100);
  const userRating = roundToNearestHalf(rating);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={() => navigate(`/products/${title}`)}>
          <CardMedia component="img" height="240" image={image} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Box sx={{ display: "flex", columnGap: "5px", marginY: "8px" }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textDecoration: "line-through" }}
              >
                {formatNumber(price * 80)}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontWeight: "600" }}
              >
                {formatNumber(finalPrice * 80)}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "600", color: "green" }}
              >
                ({Math.round(discountPercentage)}% OFF)
              </Typography>
            </Box>
            <Rating name="rating" value={userRating} precision={0.5} readOnly />
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Product;
