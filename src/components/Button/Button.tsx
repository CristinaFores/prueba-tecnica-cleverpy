import { Link } from "react-router-dom";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  action?: () => void;
  disabled?: boolean;
  ariaLabel: string;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
  image?: JSX.Element;
  linkActive?: boolean;
  patch?: string;
}

const Button = ({
  text,
  action,
  ariaLabel,
  onSubmit,
  disabled,
  type,
  image,
  linkActive,
  patch,
}: ButtonProps): JSX.Element => {
  return (
    <>
      <ButtonStyled>
        {linkActive ? (
          <Link to={patch!}>
            {text} {image}
          </Link>
        ) : (
          <button
            aria-label={ariaLabel}
            disabled={disabled}
            onSubmit={onSubmit}
            type={type}
            onClick={action}
          >
            {text}
            {image}
          </button>
        )}
      </ButtonStyled>
    </>
  );
};

export default Button;
