import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  action?: () => void;
  disabled?: boolean;
  ariaLabel: string;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({
  text,
  action,
  ariaLabel,
  onSubmit,
  disabled,
  type,
}: ButtonProps): JSX.Element => {
  return (
    <>
      <ButtonStyled
        onClick={action}
        aria-label={ariaLabel}
        disabled={disabled}
        onSubmit={onSubmit}
        type={type}
      >
        {text}
      </ButtonStyled>
    </>
  );
};

export default Button;
