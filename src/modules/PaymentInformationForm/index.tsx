import Input from "../../components/Input/index";
import "./index.css";
import { FormEvent } from "react";
import Button from "../../components/Button/index";

export type PaymentInformation = {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  name: string;
  zipcode: string;
};

type Props = {
  paymentInformation?: PaymentInformation;
  onContinue: (paymentInformation: PaymentInformation) => void;
};

export default function PaymentInformationForm(props: Props) {
  const { paymentInformation, onContinue } = props;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const inputs = Array.from(form.querySelectorAll("input"));

    if (inputs.every((input) => input.validity.valid)) {
      onContinue({
        cardNumber: inputs[0].value,
        expirationDate: inputs[1].value,
        cvv: inputs[2].value,
        name: inputs[3].value,
        zipcode: inputs[4].value,
      });
    }
  };

  return (
    <form className="payment-information-form_container" onSubmit={onSubmit}>
      <Input
        className="payment-information-form_input"
        label="Card number"
        pattern="[0-9]{16}"
        required
        value={paymentInformation?.cardNumber}
      />
      <Input
        className="payment-information-form_input__narrow"
        label="Expires (MM/YY)"
        pattern="[0-9]{2}/[0-9]{2}"
        required
        value={paymentInformation?.expirationDate}
      />
      <Input
        className="payment-information-form_input__narrow"
        label="Security code (CVV)"
        pattern="[0-9]{3,4}"
        required
        value={paymentInformation?.cvv}
      />
      <Input
        className="payment-information-form_input"
        label="Name"
        required
        value={paymentInformation?.name}
      />
      <Input
        className="payment-information-form_input"
        label="Zipcode"
        pattern="[0-9]{5}"
        required
        value={paymentInformation?.zipcode}
      />

      <Button className="payment-information-form_submit" type="submit">
        Continue
      </Button>
    </form>
  );
}
