import React from 'react';
import './style.css';

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

/**
 * Component Button
 * @param {BtnProps} props
 * @return {JSX.Element}
*/
function Button(props: BtnProps) {
  return (
    <button className='button'>{props.children}</button>
  );
}

export default Button;
