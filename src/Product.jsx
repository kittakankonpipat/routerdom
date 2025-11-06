import React from "react";

export default function Product({ name, price, image, desc }) {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 hover:scale-[1.02] transition-transform duration-300">
      <div className="relative mx-4 mt-4 overflow-hidden bg-white rounded-xl h-64">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="font-sans text-base font-medium leading-relaxed text-gray-900">
            {name}
          </p>
          <p className="font-sans text-base font-medium leading-relaxed text-gray-900">
            {price}
          </p>
        </div>
        <p className="text-sm text-gray-700 opacity-75">{desc}</p>
      </div>

      <div className="p-6 pt-0">
        <button
          type="button"
          className="w-full py-3 px-6 text-xs font-bold uppercase bg-gray-900/10 text-gray-900 rounded-lg hover:scale-105 active:scale-100 transition-all"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
