import React from "react";
import ProfileCard from "../../components/ProfileCard";

export const metadata = {
  title: "Articles",
  description: "Things I’ve made trying to put my dent in the universe.",
};
function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default layout;
