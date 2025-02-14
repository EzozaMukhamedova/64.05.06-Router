import React from "react";
import NewsCard from "../NewsCard/index";

function NewsGrid({ newsItems }) {
  return (
    <div className="container p-4 mx-auto">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {newsItems.map((news) => (
          <NewsCard
            key={news.id}
            title={news.title}
            description={news.description}
            imageUrl={news.imageUrl}
            date={news.date}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsGrid;
