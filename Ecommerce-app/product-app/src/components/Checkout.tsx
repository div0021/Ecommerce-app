import { Button, Container, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import AddressForm from "./AddressForm";


const Checkout = () => {
  const [check,setCheck] = useState(false)
  return (
    <React.Fragment>
      <Container component="main" maxWidth="sm" sx={{ mb: 2, mt: "8rem" }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>

          {check ? (
            <React.Fragment>
              <Typography variant="h5" sx={{mt:'2rem'}} gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order is successfully initialized. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <AddressForm />

              <Button
                variant="contained"
                onClick={() => {setCheck(true)}}
                sx={{ mt: 3, ml: 1 }}
              >
                Make order
              </Button>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default Checkout;
