import { InputLabelStyled } from "./InputStyled";

interface InputProps {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  htmlFor: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onChangeTextArea?: React.ChangeEventHandler<HTMLTextAreaElement>;
  required?: boolean;
  autoComplete?: string;
  id?: string;
  textLabel: string;
  textArea: boolean;
}

const Input = ({
  type,
  placeholder,
  htmlFor,
  onChange,
  required,
  autoComplete,
  id,
  textLabel,
  textArea,
  onChangeTextArea,
}: InputProps) => {
  return (
    <>
      {textArea ? (
        <InputLabelStyled htmlFor={htmlFor}>
          {textLabel}
          <textarea
            required={required}
            autoComplete={autoComplete}
            id={id}
            placeholder={placeholder}
            onChange={onChangeTextArea}
          ></textarea>
        </InputLabelStyled>
      ) : (
        <InputLabelStyled htmlFor={htmlFor}>
          {textLabel}
          <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            required={required}
            autoComplete={autoComplete}
            id={id}
          />
        </InputLabelStyled>
      )}
    </>
  );
};

export default Input;
