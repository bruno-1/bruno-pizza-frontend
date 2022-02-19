// import Button from "./components/button";
// import Home from "./pages/home";
// import {lazy, Suspense} from 'react';
// import {Route, Routes} from 'react-router-dom';

import React from 'react';
import {Route, Routes} from 'react-router-dom';


const Home = React.lazy(() => import('./pages/home'));

/**
 * Component App
 * @return {JSX.Element}
*/
function App() {
  return (
    <React.Suspense fallback>
      <Routes>
        <Route path="/:pizzaNick" element={<Home />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
