import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import GraphPage from "./GraphPage";

export default function Index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GraphPage />} />
        <Route path="/reserve" element={<GraphPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
