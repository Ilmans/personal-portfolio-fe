import React from "react";
import ProfileCard from "../../components/ProfileCard";

export const metadata = {
  title: "Projects",
  description: "Things I’ve made trying to put my dent in the universe.",
};
function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex justify-between gap-4 mt-4">
      <ProfileCard className="hidden lg:w-2/7 lg:block" />
      {children}
    </main>
  );
}

export default layout;
