import { useFormStatus } from "react-dom";
import { Button, type ButtonProps } from "./ui/button";

interface SubmitButtonProps extends ButtonProps {
  isValid: boolean;
}

export const SubmitButton = ({ isValid, ...rest }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending || !isValid} {...rest}></Button>
  );
};
