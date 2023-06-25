"use client";
import React, { FC } from "react";
import { useRouter, usePathname } from "next/navigation";

const Tabs = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex gap-4 px-16 p-4">
      <TabItem
        title="Discussion"
        active={pathname === "/college/discussion"}
        onClick={() => router.push("/college/discussion")}
      />
      <TabItem
        title="Reviews"
        active={pathname === "/college/review"}
        onClick={() => router.push("/college/review")}
      />
      <TabItem
        title="Gallery"
        active={pathname === "/college/gallery"}
        onClick={() => router.push("/college/gallery")}
      />
    </div>
  );
};

export default Tabs;

interface TabItemProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

const TabItem: FC<TabItemProps> = ({ title, active, onClick }) => {
  return (
    <div
      className={`${
        active
          ? "text-highlight border-b-highlight border-b-2"
          : "text-gray-400"
      } cursor-pointer text-lg font-semibold`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};
