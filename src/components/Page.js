import React, { useState, useEffect } from "react";
import Article from "./Article";

const Page = ({ items }) => {
  const itemsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);

  //resets page count to 1 if item count is updated
  useEffect(() => {
    setCurrentPage(1);
  }, [items]);

  //total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  //page indices
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);

  //slice arrays into 2 columns
  const itemsliced = items.slice(startIndex, endIndex);
  const items1 = itemsliced.filter((_, index) => index % 2 === 0);
  const items2 = itemsliced.filter((_, index) => index % 2 !== 0);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <div className="articles">
        <div className="articles-col">
          {items1.map((article) => (
            <Article
              key={article.key}
              title={article.title}
              image={article.image}
              abstract={article.abstract}
              date={article.date}
              index={article.key}
            ></Article>
          ))}
        </div>
        <div className="articles-col">
          {items2.map((article) => (
            <Article
              key={article.key}
              title={article.title}
              image={article.image}
              abstract={article.abstract}
              date={article.date}
              index={article.key}
            ></Article>
          ))}
        </div>
      </div>

      <div className="page-nav">
        <button
          className="page-button"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            className="page-button"
            key={i}
            disabled={currentPage === i + 1}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="page-button"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;
