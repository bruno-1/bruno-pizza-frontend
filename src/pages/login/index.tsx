import React from 'react';
import './style.css';

/**
 * Page Login
 * @return {JSX.Element}
*/
function Login() {
  // const [user, setUser] = useState(Object);

  const Logo = React.lazy(() => import('../../components/logo'));

  /**
   * Init auth2 google
   * @return {gapi.auth2.GoogleAuth}
   */
  function googleAuthInit() {
    return gapi.auth2.init({
      client_id: process.env.REACT_APP_CLIENT_ID,
      scope: 'profile',
    });
  }

  /**
   * Login with google
   * @return {void}
   */
  function loginWithGoogle() {
    gapi.load('auth2', function() {
      googleAuthInit().signIn();
    });
  }

  return (
    <>
      <main className="main">
        <Logo className="logo__main"/>
        <button onClick={() => loginWithGoogle()} className="button__main">
          <div className="divButton__button">
            <img className="img__divButton" src="https://developers.google.com/identity/images/g-logo.png" />
          </div>
          <span className="txt_button">Fazer login com o Google</span>
        </button>
      </main>
    </>
  );
}

export default Login;
