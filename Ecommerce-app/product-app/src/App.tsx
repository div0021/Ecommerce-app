import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    async function calling() {
      const res = await axios.get("http://localhost:3000/product-list/2");
      console.log(res.data);
    }
    calling();
  }, []);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main style={{ overflowX: "hidden" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
