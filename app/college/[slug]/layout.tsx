import CollegeHero from "@/components/CollegeHero";
import Tabs from "@/components/Tabs";
import Topbar from "@/components/Topbar";
import React from "react";

const College = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Topbar />
      <div className="content">{children}</div>
    </div>
  );
};

export default College;
