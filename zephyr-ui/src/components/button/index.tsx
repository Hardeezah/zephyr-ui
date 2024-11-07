import React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import themes from "./button.theme";
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

interface ButtonProps extends IProps {
  children: React.ReactNode;
}

export class ZephyrButton {
  static primary(props: ButtonProps): React.ReactNode {
    return <Button variant="primary" {...props} />;
  }

  static secondary(props: ButtonProps): React.ReactNode {
    return <Button variant="secondary" {...props} />;
  }
}
