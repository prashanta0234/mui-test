import React from "react";
import SingleNews from "./SingleNews";

const News: React.FC = () => {
  const newsArray: number[] = [1, 2, 3, 4, 5];
  return (
    <>
      {newsArray.map((news) => (
        <SingleNews key={news} />
      ))}
    </>
  );
};
export default News;
