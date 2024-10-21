import React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import themes from "./theme";
import Loader from "../loader";

interface IProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof themes> {
  loading?: boolean;
}

const Button = ({
  variant,
  size,
  fullWidth,
  children,
  className,
  loading,
  disabled,
  ...rest
}: IProps): React.ReactNode => {
  return (
    <button
      className={cn(themes({ variant, size, fullWidth }), className)}
      disabled={loading || disabled}
      {...rest}
    >
      {loading && <Loader variant={variant} />}
      {children}
    </button>
  );
};

export default Button;
