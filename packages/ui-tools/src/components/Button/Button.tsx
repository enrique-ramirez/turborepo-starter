import { StyledButton } from "./Button.styled";
import { Props } from "./Button.types";

export const Button = ({ ...rest }: Props) => <StyledButton {...rest} />;
