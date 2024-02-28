import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Storefront, Home, Inventory2, Group } from "@mui/icons-material";
import Cart from "./Cart";
import { Link, useNavigate } from "react-router-dom";
import { scrollToSection } from "../utils/scrollHelper";

const brandName = {
  width: "140px",
  height: "auto",
  marginLeft: "10px",
  fontWeight: "700",
  color: "rgb(61,102,205)",
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const navigate = useNavigate();
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={() => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  px: 2,
                }}
              >
                <Link
                  to={"/"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    columnGap: "3px",
                    textDecoration: "none",
                  }}
                  onClick={() => scrollToSection("landing_page")}
                >
                  <Storefront sx={{ color: "rgb(61,102,205)" }} />
                  <Typography
                    variant="h5"
                    color="text.primary"
                    style={brandName}
                  >
                    NexTouch
                  </Typography>
                </Link>
              </Box>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItem
                  sx={{ py: "6px", px: "12px" }}
                  onClick={() => navigate("/")}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.5,
                      transition: "all .3s",
                      transform: "scale(1)",
                      "&:hover": {
                        opacity: 1,
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem
                  sx={{ py: "6px", px: "12px" }}
                  onClick={() => navigate("/allProducts")}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.5,
                      transition: "all .3s",
                      transform: "scale(1)",
                      "&:hover": {
                        opacity: 1,
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    Products
                  </Typography>
                </MenuItem>
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.5,
                      transition: "all .3s",
                      transform: "scale(1)",
                      "&:hover": {
                        opacity: 1,
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    About us
                  </Typography>
                </MenuItem>
              </Box>
            </Box>

            {/* CART */}

            <Cart />

            {/* MOBILE VIEW */}
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>

              {/* NAVIGATION DRAWER */}
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <MenuItem
                    // onClick={() => scrollToSection('features')}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: "5px",
                    }}
                  >
                    <Home sx={{ width: 18 }} />
                    <Typography variant="body2" sx={{ color: "" }}>
                      Home
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    //  onClick={() => scrollToSection('testimonials')}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: "5px",
                    }}
                  >
                    <Inventory2 sx={{ width: 18 }} />
                    <Typography variant="body2">Products</Typography>
                  </MenuItem>
                  <MenuItem
                    // onClick={() => scrollToSection('highlights')}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: "5px",
                    }}
                  >
                    <Group sx={{ width: 18 }} />
                    <Typography variant="body2">About Us</Typography>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
