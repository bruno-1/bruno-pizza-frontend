// import Button from "./components/button";
// import Home from "./pages/home";
import { Suspense } from "react";
import { Home } from "./lazy";



function App() {
  return (
    <Suspense fallback>
      <Home />
    </Suspense>
  );
}

export default App;
