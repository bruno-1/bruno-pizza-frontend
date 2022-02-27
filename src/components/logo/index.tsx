import React from 'react';
import './style.css';

interface LogoProps extends React.AllHTMLAttributes<HTMLDivElement> {}

/**
 * Component logo
 * @param {LogoProps} props
 * @return {JSX.Element}
*/
function Logo(props: LogoProps) {
  return (
    <div className={props.className}>
      <h1 className="logo">
        <span className="green">Bru</span>no Pi<span className="red">zza</span>
      </h1>
    </div>
  );
}

export default Logo;
