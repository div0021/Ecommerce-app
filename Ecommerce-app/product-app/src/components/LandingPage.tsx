import { Suspense } from "react";
import Hero from "./Hero";
import TopProducts from "./TopProducts";
import { Skeleton } from "@mui/material";

const LandingPage = () => {
  return (
    <>
      <Suspense fallback={<Skeleton width="40rem" />}>
        <Hero />
      </Suspense>
      <TopProducts />
    </>
  );
};

export default LandingPage;
