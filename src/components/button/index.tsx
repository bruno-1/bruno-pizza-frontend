import { ButtonHTMLAttributes } from "react";
import "./style.css"

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

function Button(props: BtnProps) {

  return(
    <button className="button">{props.children}</button>
  )
}

export default Button;