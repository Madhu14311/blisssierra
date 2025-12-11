import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Import pages

import BlissSierra from "./BlissSierra";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import Services from "./Services";
import Insights from "./Insights";
import Careers from "./Careers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BlissSierra />} />

      <Route path="/Who-We-Are" element={<WhoWeAre />} />

      <Route path="/what-we-do" element={<WhatWeDo />} />

      <Route path="/Services" element={<Services />} />

      <Route path="/Insights" element={<Insights/>} />
      
      <Route path="/Careers" element={<Careers/>} />

    </Routes>
  </BrowserRouter>

);



