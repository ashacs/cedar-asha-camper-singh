import { useState } from "react";
import Stepper from "../../components/Stepper/index";
import Step from "../../components/Stepper/Step";
import "./index.css";

export default function PaymentStepper() {
  const steps = [
    { title: "Payment information", content: "TODO step content" },
    { title: "Review and pay", content: "TODO step content" },
  ];
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Stepper className="payment-stepper_container">
      {steps.map((step, index) => (
        <Step index={index} title={step.title} isActive={activeStep === index}>
          {step.content}
        </Step>
      ))}
    </Stepper>
  );
}
