import React from "react";

function NewsCard({ title, date, description, imageUrl }) {
  return (
    <div className="max-w-sm m-4 overflow-hidden bg-white rounded shadow-lg">
      <img src={imageUrl} alt="News" className="object-cover w-full h-48" />
      <div className="p-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700">{description}</p>
        <div className="mt-4 text-xs text-gray-600">{date}</div>
      </div>
    </div>
  );
}

export default NewsCard;
