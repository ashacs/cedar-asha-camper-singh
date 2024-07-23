import {
  ReactNode,
  InputHTMLAttributes,
  useCallback,
  FocusEvent,
  useState,
} from "react";
import "./index.css";
import classnames from "../../utils/classnames";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode;
  className?: string;
};

export default function Input({
  label,
  className: propsClassName,
  id: propsId,
  ...rest
}: Props) {
  const [errorMessage, setErrorMessage] = useState<string>();

  const validate = useCallback((event: FocusEvent<HTMLInputElement>) => {
    const { validity } = event.target;
    if (validity.valid) {
      setErrorMessage(undefined);
    } else if (validity.patternMismatch) {
      setErrorMessage("This field does not match the required pattern.");
    } else if (validity.valueMissing) {
      setErrorMessage("This field is required.");
    } else {
      setErrorMessage("Something is wrong with this field.");
    }
  }, []);

  const id = propsId || `${Math.floor(Math.random() * 100)}`;
  const errorMessageId = `${id}-error-message"`;
  const containerClassName = classnames("input_container", propsClassName);
  const inputClassName = classnames(
    "input",
    errorMessage ? "input__error" : ""
  );

  return (
    <div className={containerClassName}>
      <label className="input_label">
        {label}
        <input
          id={id}
          className={inputClassName}
          aria-describedby={errorMessageId}
          onBlur={validate}
          {...rest}
        />

        {errorMessage && (
          <span className="input_error-message" id={errorMessageId}>
            {errorMessage}
          </span>
        )}
      </label>
    </div>
  );
}
