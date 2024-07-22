import { ReactNode } from "react";
import "./index.css";

type Props = {
  index: number;
  title: ReactNode;
  children: ReactNode;
  isActive: boolean;
};

export default function Step(props: Props) {
  const { index, title, children, isActive } = props;

  return (
    <li className="stepper_step" aria-current={isActive ?? "step"}>
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
