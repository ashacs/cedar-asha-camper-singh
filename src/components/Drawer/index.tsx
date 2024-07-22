import { ReactNode } from "react";
import classnames from "../../utils/classnames";
import "./index.css";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Drawer(props: Props) {
  const className = classnames("drawer_container", props.className);

  return <div className={className}>{props.children}</div>;
}
