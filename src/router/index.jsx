import { Route, Routes } from "react-router";
import Home from "../components/Home/index";
import About from "../components/About";
import Login from "../components/Login";
import Admin from "../components/Admin";
import ProtectedRouter from "./ProtectedRouter";
import Product from "../pages/Product";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/admin"
        element={
          <ProtectedRouter>
            <Admin />
          </ProtectedRouter>
        }
      ></Route>
      <Route path="/product/:id" element={<Product />}></Route>
    </Routes>
  );
};
export default Router;
