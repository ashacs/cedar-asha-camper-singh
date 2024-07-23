import { useState } from "react";
import Stepper from "../../components/Stepper/index";
import Step from "../../components/Stepper/Step";
import "./index.css";
import PaymentInformationForm, {
  PaymentInformation,
} from "../PaymentInformationForm/index";
import ReviewAndPay from "../ReviewAndPay/index";
import PaymentConfirmation from "../PaymentConfirmation/index";

export default function PaymentStepper() {
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  const [
    paymentInformation,
    setPaymentInformation,
  ] = useState<PaymentInformation>();

  const [activeStepId, setActiveStepId] = useState<
    "payment-info" | "review-pay"
  >("payment-info");

  if (isPaymentComplete) {
    return <PaymentConfirmation />;
  }

  return (
    <Stepper className="payment-stepper_container">
      <Step
        index={0}
        id="payment-info"
        title="Payment information"
        status={activeStepId === "payment-info" ? "active" : "inactive"}
      >
        <PaymentInformationForm
          onContinue={(info) => {
            setPaymentInformation(info);
            setActiveStepId("review-pay");
          }}
        />
      </Step>
      <Step
        index={1}
        id="review-pay"
        title="Payment information"
        status={
          activeStepId === "review-pay"
            ? "active"
            : paymentInformation
            ? "inactive"
            : "disabled"
        }
      >
        {paymentInformation && (
          <ReviewAndPay
            onComplete={() => setIsPaymentComplete(true)}
            paymentInformation={paymentInformation}
          />
        )}
      </Step>
    </Stepper>
  );
}
