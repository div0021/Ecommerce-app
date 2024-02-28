import { useParams } from "react-router-dom";
import productData from "../data/products.json";
import { Box, Button, Container, Rating, Typography } from "@mui/material";
import ImageTab from "./ImageTab";
import { formatNumber } from "../utils/formatAmount";
import { roundToNearestHalf } from "../utils/roundToNearstHalf";
import { AddShoppingCart } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { cartData, onOpen, onOpenWithData } from "../redux/Slices/cartSlice";

const ProductPage = () => {


  const dispatch = useAppDispatch()

  const { id } = useParams();
  const product = productData.products.filter((el) => el.title === id);

  const {
    brand,
    category,
    description,
    discountPercentage,
    images,
    price,
    rating,
    stock,
    title,
  } = product[0];

  const handleCart = () => {
    if(!isPresent){
    dispatch(onOpenWithData({...product[0]}))
   }else{
    dispatch(onOpen())
   }
  }

  const cartProduct = useAppSelector(cartData)

  const isPresent = cartProduct.filter(el=>el.title===title).length>0


  const finalPrice = price - Math.round((price * discountPercentage) / 100);
  const userRating = roundToNearestHalf(rating);

  return (
    <Box sx={{ width: "100%", background: "" }}>
      <Container maxWidth="xl">
        <Box sx={{ paddingTop: "10rem", background: "" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              justifyContent: "center",
              alignItems: {
                xs:'center',
                md:'start'
              },
              columnGap:'3rem',
              rowGap:'1rem'
            }}
          >
            <ImageTab image={images} />

            <Box sx={{paddingTop:{
                xs:'1rem',md:'4rem'
            }}}>
              <Typography variant="h4">{title}</Typography>
              <Typography variant="body2" fontSize={14}>
                {brand}
              </Typography>
              <Typography variant="body2" sx={{width:{
                xs:'90%',sm:'30rem',md:'18rem'
              }}}>{description}</Typography>
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
              <Typography>Category: {category}</Typography>
              
              <Box sx={{display: "flex",
                  alignItems: "center",
                  columnGap: "5px",
                  marginY: "5px",}}>
                <Typography variant="body2" >
                    STATUS:
                </Typography>
                {
                    stock === 0 ? (
                        <Typography variant="body2" sx={{
                            background:'red',padding:'5px',borderRadius:'10px'
                        }}>
                            Not Available
                        </Typography>
                    ) : (
                        <Typography variant="body2" sx={{
                            background:'green',padding:'5px',borderRadius:'10px'
                        }}>
                            Available
                        </Typography>
                    )
                }
              </Box>

              <Box sx={{display:'flex',columnGap:'5px'}}>
                <Button variant="contained" color="primary" sx={{paddingY:'8px'}} disabled={stock === 0} onClick={handleCart}>
                    <AddShoppingCart />
                    <Typography variant="body2" sx={{ml:'5px'}}>
                        {isPresent? "Go to cart":"Add to cart"}
                    </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductPage;
