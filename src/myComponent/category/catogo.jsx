import React from "react";

export default function catogo({ image, title, count, onClick }) {
  return (
    <>
      <div
        onClick={() => onClick(title)}
        className="h-85 w-80 relative rounded-xl overflow-hidden transform transition duration-200 hover:scale-110"
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col justify-center h-full p-6 text-white">
          <h2 className="font-bold">{title}</h2>
          <p>{count} products</p>
        </div>
      </div>
    </>
  );
}
