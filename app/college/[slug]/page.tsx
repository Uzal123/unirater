/* eslint-disable @next/next/no-img-element */
"use client";
import CollegeHero from "@/components/CollegeHero";
import Tabs from "@/components/Tabs";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { getByIdHook } from "@/hooks/getByIdHook";

const College = () => {
  const { slug } = useParams();
  const { data, isLoading, getInstitution } = getByIdHook();

  useEffect(() => {
    getInstitution(slug);
  }, [slug]);

  return (
    <div className="">
      <CollegeHero institution={data} isLoading={isLoading} />

      <Tabs />
    </div>
  );
};

export default College;
