import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{width:'100%',background:'#000',color:"antiquewhite" }}>
            <Container maxWidth="xl">
                <Box sx={{width:'100%',marginTop:'8rem',paddingY:'3rem',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                   <Typography variant="h4" color="rgb(61,102,205)" fontWeight="700">
                    NexTouch
                   </Typography>
                   <Typography variant="body1">
                   Copyright © NexTouch 2024
                   </Typography>
                </Box>

            </Container>
    </Box>
  );
};

export default Footer;