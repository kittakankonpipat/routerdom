// src/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const Home = () => {
  const products = [
    {
      name: "Apple AirPods",
      price: "$95.00",
      image:
        "https://images.unsplash.com/photo-1629367494173-c78a56567877?auto=format&fit=crop&w=927&q=80",
      desc: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
    },
    {
      name: "Sony Headphones",
      price: "$120.00",
      image:
        "https://images.unsplash.com/photo-1629367494173-c78a56567877?auto=format&fit=crop&w=927&q=80",
      desc: "Noise-cancelling over-ear headphones with crystal clear sound and long battery life.",
    },
    {
      name: "Logitech MX Master 3",
      price: "$75.00",
      image:
        "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?auto=format&fit=crop&w=927&q=80",
      desc: "Wireless ergonomic mouse designed for productivity with precise tracking.",
    },
  ];

  const menuCategories = [
    "Best seller",
    "New Releases",
    "Books",
    "Computers",
    "Fashion",
    "Health",
    "Pharmacy",
    "Toys & Games",
  ];

  return (
    <>
      <div>
        <div className="bg-white">
          <div className="border py-3 px-6">
            {/* Top bar */}
            <div className="flex justify-between">
              <Link to="/" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
                <span className="ml-2 font-semibold text-[#252C32]">
                  What a Market
                </span>
              </Link>

              <div className="ml-6 flex flex-1 gap-x-3">
                <Link
                  to="/category/browse"
                  className="flex cursor-pointer select-none items-center gap-x-2 rounded-md border bg-[#4094F7] py-2 px-4 text-white hover:bg-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <span className="text-sm font-medium">Categories</span>
                </Link>

                <input
                  type="text"
                  className="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm"
                  defaultValue="DJI phantom"
                />
              </div>

              <div className="ml-2 flex">
                <Link
                  to="/orders"
                  className="flex items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                    <path
                      fillRule="evenodd"
                      d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">Orders</span>
                </Link>

                <Link
                  to="/favorites"
                  className="flex items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">Favorites</span>
                </Link>

                <Link
                  to="/cart"
                  className="flex items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100"
                >
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                      3
                    </span>
                  </div>
                  <span className="text-sm font-medium">Cart</span>
                </Link>

                <Link
                  to="/signin"
                  className="ml-2 flex items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100"
                >
                  <span className="text-sm font-medium">Sign in</span>
                </Link>
              </div>
            </div>

            {/* submenu */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-x-2 py-1 px-2">
                {/* ...ตำแหน่ง/ไอคอนซ้ายตามเดิม... */}
                <span className="text-sm font-medium">California</span>
              </div>

              <div className="flex gap-x-8">
                {[
                  { label: "Best seller", to: "/Bestsell" }, // <<— ตรงนี้ลิ้งไปหน้า Bestsell.jsx
                  { label: "New Releases", to: "/category/new-releases" },
                  { label: "Books", to: "/category/books" },
                  { label: "Computers", to: "/category/computers" },
                  { label: "Fashion", to: "/category/fashion" },
                  { label: "Health", to: "/category/health" },
                  { label: "Pharmacy", to: "/category/pharmacy" },
                  { label: "Toys & Games", to: "/category/toys-and-games" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Link
                to="/sell"
                className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100"
              >
                Become a seller
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ====== ส่วนแสดงการ์ดหลายใบ ====== */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {products.map((p, i) => (
            <Link key={i} to={`/product/${slugify(p.name)}`} className="w-full">
              <Product {...p} />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
