import { PaymentInformation } from "../PaymentInformationForm/index";
import data from "../../data";
import currency from "../../utils/currency";
import Button from "../../components/Button/index";
import "./index.css";

type Props = {
  paymentInformation: PaymentInformation;
  onComplete: () => void;
};

export default function ReviewAndPay(props: Props) {
  const { paymentInformation, onComplete } = props;
  const { amountDue } = data.bills;

  return (
    <div className="review-and-pay_container">
      <div>You’re about to make a payment of {currency(amountDue)}</div>
      <div>Payment method {paymentInformation.cardNumber}</div>
      <Button onClick={onComplete}>Pay {currency(amountDue)}</Button>
    </div>
  );
}
