// import Button from "./components/button";
// import Home from "./pages/home";
import { lazy, Suspense } from "react";

const Home = lazy(() => import('./pages/home'))


function App() {
  return (
    <Suspense fallback>
      <Home />
    </Suspense>
  );
}

export default App;
