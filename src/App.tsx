// import Button from "./components/button";
// import Home from "./pages/home";
// import {lazy, Suspense} from 'react';
// import {Route, Routes} from 'react-router-dom';

import React from 'react';
import {Route, Routes} from 'react-router-dom';
// import Login from './pages/login';


const Home = React.lazy(() => import('./pages/home'));
const Login = React.lazy(() => import('./pages/login'));

/**
 * Component App
 * @return {JSX.Element}
*/
function App() {
  return (
    <React.Suspense fallback>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/:pizzaNick" element={<Home />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
