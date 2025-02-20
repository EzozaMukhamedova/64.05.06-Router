import React, { useContext } from "react";
import { NameContext } from "../context";
import { Navigate } from "react-router";

export default function ProtectedRouter({ children }) {
  const { token } = useContext(NameContext);

  return token ? children : <Navigate to="/login" />;
}
