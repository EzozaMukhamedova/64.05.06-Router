import React from "react";
import Router from "./router/index";
import { ToastContainer, toast } from "react-toastify";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Router />
      {/* <div
        style={{
          backgroundImage: 'url("./assets/background.png")',
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
 
      </div> */}
    </>
  );
}
