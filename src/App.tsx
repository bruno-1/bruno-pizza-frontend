// import Button from "./components/button";
// import Home from "./pages/home";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import('./pages/home'))


function App() {
  return (
    <Suspense fallback>
      <Routes>
        <Route path="/:pizzaNick" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
