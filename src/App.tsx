import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./page/style/Global.css";

import { Home } from "./page/sections/Home/Home";
import { Blog } from "./page/sections/Blog/Blog";
import { Works } from "./page/sections/Works/Works";
import { PNF } from "./page/sections/PNF 404/PNF";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/404" element={<PNF />} />
          <Route path="/" element={<Home />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Works" element={<Works />} />
          <Route path="*" element={<Navigate to={"/404"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
