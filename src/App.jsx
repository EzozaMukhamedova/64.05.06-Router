import React from "react";
import Router from "./router/index";
import { ToastContainer } from "react-toastify";
import { NameProvider } from "./context/index";
// import { newsItems } from './components/data/index';

export default function App() {
  return (
    <NameProvider>
      <ToastContainer />
      <Router />
    </NameProvider>
  );
}
