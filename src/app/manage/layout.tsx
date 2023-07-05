import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import LayoutAdmin from "./LayoutAdmin";

function layout({ children }) {
  return <LayoutAdmin>{children}</LayoutAdmin>;
}

export default layout;
