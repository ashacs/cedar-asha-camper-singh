import { ReactNode } from "react";
import classnames from "../../utils/classnames";
import "./index.css";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Stepper(props: Props) {
  const className = classnames("stepper_list", props.className);

  return <ol className={className}>{props.children}</ol>;
}
