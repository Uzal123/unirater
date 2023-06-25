/* eslint-disable @next/next/no-img-element */
"use client";
import React, { Fragment, use, useEffect, useState } from "react";
import { BiSearch, BiTrendingUp } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { searchHook } from "@/hooks/searchHook";
import Skeleton from "./Skeleton";
import { type } from "os";

const Topbar = () => {
  const { data, isLoading, getSearchResults, setSlug, slug } = searchHook();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [navOpen, setNavOpen] = useState(false);

  const handleSearch = (value: React.SetStateAction<string>) => {
    if (!isSearchOpen) setIsSearchOpen(true);
    setSearch(value);
    setSlug(value as string);
  };

  useEffect(() => {
    if (search.length > 2) {
      getSearchResults({ slug: search, limit: 5, page: 1 });
    }
  }, [search]);

  return (
    <div className="flex justify-between items-center p-2 px-4 md:px-10 bg-secondary w-screen topbar gap-2 md:gap-8 relative">
      <div
        className={`bg-black opacity-50 w-screen absolute inset-0 z-[9000] transition-all duration-300 ${
          isSearchOpen ? "h-screen" : "h-0"
        }`}
      ></div>
      <div className="flex md:gap-8 gap-4 items-center w-full">
        <h1
          className="text-3xl font-bold cursor-pointer w-max"
          onClick={() => router.push("/")}
        >
          Uni<span className="text-highlight">Rater</span>
        </h1>
        <div
          className={`flex relative items-center rounded-3xl transition-all z-[10000] duration-300 pl-4 pr-1 py-1 border-2 bg-white  ${
            isSearchOpen ? "w-full" : "w-1/2"
          }`}
        >
          <input
            type="text"
            placeholder="Search"
            value={search}
            className="outline-none bg-white w-full"
            onChange={(e) => handleSearch(e.target.value)}
            onClick={() => {
              if (!isSearchOpen) setIsSearchOpen(true);
            }}
          />
          <div
            className={`absolute w-full top-12 transition-all duration-300  pr-5 overflow-hidden ${
              isSearchOpen ? "h-96" : "h-0"
            } `}
          >
            <div className="flex w-full bg-white rounded-xl h-full p-2 items-start">
              {!slug && (
                <div className="flex gap-2 items-center text-lg font-bold">
                  <p className="">Trending Searches </p>
                  <BiTrendingUp />
                </div>
              )}
              <div className="flex flex-col gap-2 w-full">
                {isLoading ? (
                  <div className="flex w-full h-full flex-col items-center">
                    <p>Searching ..</p>
                    <Skeleton className="w-full" />
                    <Skeleton />
                    <Skeleton />
                  </div>
                ) : (
                  slug &&
                  data.map((item) => (
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      key={item._id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearch("");
                        router.push(`/college/${item._id}`);
                      }}
                    >
                      <img
                        src={item.logo}
                        alt="logo"
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm">{item.email}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            {isSearchOpen && (
              <Fragment>
                <button
                  className=" hover:bg-gray-100 p-2 rounded-full"
                  onClick={() => {
                    setSearch("");
                    setIsSearchOpen(false);
                  }}
                >
                  <RxCross1 className="" />
                </button>
                <p>|</p>
              </Fragment>
            )}
            <button
              className=" bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
              onClick={() => router.push("/searchResult")}
              type="submit"
            >
              <BiSearch className="" />
            </button>
          </div>
        </div>
      </div>
      <nav className="md:flex gap-8 w-max hidden">
        <ul className="gap-8 flex items-center font-semibold text-md">
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Discussion</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center md:hidden">
        <button
          className="bg-primary text-highlight rounded-full font-semibold"
          onClick={() => setNavOpen(true)}
        >
          <IoMdMenu className="" />
        </button>
      </div>

      {navOpen && (
        <nav className="flex flex-col gap-8 absolute w-screen h-screen top-0 left-0 bg-secondary z-[10000]">
          <div className="flex items-center justify-end px-4 py-2 w-full">
            <button
              className="bg-primary text-highlight rounded-full font-semibold"
              onClick={() => setNavOpen(false)}
            >
              <IoMdClose />
            </button>
          </div>
          <ul className="gap-8 flex flex-col justify-center w-full h-full items-center font-semibold text-md">
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Discussion</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Topbar;
