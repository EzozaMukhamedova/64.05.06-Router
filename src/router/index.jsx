import { Route, Routes } from "react-router";
import Home from "../components/Home/index";
import About from "../components/About";
import Login from "../components/Login";
import Admin from "../components/Admin";
// import Product from "../components/Product";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      {/* <Route path="/product" element={<Product />}></Route> */}
    </Routes>
  );
};
export default Router;
