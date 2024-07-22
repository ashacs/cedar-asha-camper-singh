import Input from "../../components/Input/index";
import "./index.css";
import { FormEvent } from "react";

export default function PaymentInformationForm() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="payment-information-form_container" onSubmit={onSubmit}>
      <Input
        className="payment-information-form_input"
        label="Card number"
        pattern="[0-9]{16}"
        required
      />
      <Input
        className="payment-information-form_input__narrow"
        label="Expires (MM/YY)"
        pattern="[0-9]{2}/[0-9]{2}"
        required
      />
      <Input
        className="payment-information-form_input__narrow"
        label="Security code (CVV)"
        pattern="[0-9]{3,4}"
        required
      />
      <Input className="payment-information-form_input" label="Name" required />
      <Input
        className="payment-information-form_input"
        label="Zipcode"
        pattern="[0-9]{5}"
        required
      />

      <button className="payment-information-form_submit" type="submit">
        Continue
      </button>
    </form>
  );
}
