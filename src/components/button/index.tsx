import { ButtonHTMLAttributes, Component } from "react";
import "./style.css"

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

class Button extends Component<BtnProps> {

  render() {
    return (<button className="button">{this.props.children}</button>)
  }
}

export default Button;