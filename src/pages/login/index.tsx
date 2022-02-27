import React from 'react';
import './style.css';

/**
 * Page Login
 * @return {JSX.Element}
*/
function Login() {
  const Logo = React.lazy(() => import('../../components/logo'));
  return (
    <main className="main">
      <Logo className="logo__main"/>
    </main>
  );
}

export default Login;
