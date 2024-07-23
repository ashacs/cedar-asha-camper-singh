import { ReactNode } from "react";
import "./index.css";

type Props = {
  id: string;
  index: number;
  title: ReactNode;
  children: ReactNode;
  status: "active" | "disabled" | "inactive";
};

export default function Step(props: Props) {
  const { index, title, children, status } = props;
  const className = `stepper_step stepper_step__${status}`;
  const isActive = status === "active";

  return (
    <li className={className} aria-current={isActive ?? "step"}>
      <div className="stepper_step-content">
        <div className="stepper_step-header">
          <span className="stepper_step-number">{index + 1}</span>
          <span className="stepper_step-title">{title}</span>
        </div>
        {isActive && children}
      </div>
    </li>
  );
}
