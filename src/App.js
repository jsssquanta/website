import React, { Suspense } from "react";
import Zealicon from "./Pages/Zealicon";
import { Routes, Route } from "react-router-dom";
const Resources = React.lazy(() => import("./Pages/Resources.js"));
const Landing = React.lazy(() => import("./Pages/Landing"));
const Projects = React.lazy(() => import("./Pages/Projects"));
const Team = React.lazy(() => import("./Pages/Team"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/zealicon" element={<Zealicon />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
