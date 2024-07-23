import { ButtonHTMLAttributes } from "react";
import classnames from "../../utils/classnames";
import "./index.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className: propsClassName, ...rest }: Props) {
  const className = classnames("button", propsClassName);

  return <button className={className} {...rest} />;
}
