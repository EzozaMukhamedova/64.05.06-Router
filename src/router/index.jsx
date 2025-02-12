import { Route, Routes } from "react-router";
import Home from "../components/Home";
import Admin from "../components/Admin";
import About from "../components/About";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
};
export default Router;
