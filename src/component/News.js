import React from "react";
import SingleNews from "./SingleNews";

export default function News() {
  const newsArray = [1, 2, 3, 4, 5];
  return (
    <>
      {newsArray.map((news) => (
        <SingleNews key={news} />
      ))}
    </>
  );
}
