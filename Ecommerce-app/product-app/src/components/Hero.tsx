import { Box, Button, Container, Typography } from "@mui/material";
import { scrollToSection } from "../utils/scrollHelper";

const Hero = () => {
  return (
    <Box
      id="landing_page"
      sx={{
        width: "100dvw",
        backgroundColor: "",
        backgroundImage: "url(./landing.jpg)",
        backgroundSize: "100% 95%",
        height: "42rem",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            width: "100%",
            background: "",
            height: "40rem",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "10%",
              color: "antiquewhite",
            }}
          >
            <Typography
              component="h2"
              variant="h2"
              sx={{ fontSize: { xs: "34px", sm: "48px", lg: "60px" } }}
            >
              Welcome to NexTouch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "12px",
                width: { sm: "80%", lg: "40%", fontWeight: "400" },
              }}
            >
              Explore our curated collection of tech-infused apparel, electronic
              gadgets, and premium skincare products. From smart wearables that
              elevate your daily routines to chic fashion pieces that define
              your style, Nextouch brings you the best of both worlds.{" "}
            </Typography>

            <Button
              variant="outlined"
              sx={{
                mt: "15px",
                "&:hover": {
                  color: "#ddd",
                },
              }}
              onClick={() => scrollToSection("top_product")}
            >
              Start Shopping
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
