import React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "../../util/classnames-merge";
import themes from "./button.theme";
import Loader from "../loader";

interface IProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof themes> {
  loading?: boolean;
  loaderVariant?: "primaryLoading" | "secondaryLoading";
}

enum ButtonVariant {
  PRIMARY = "primary",
  PRIMARY_LOADING = "primaryLoading",
  SECONDARY = "secondary",
  SECONDARY_LOADING = "secondaryLoading",
}

const Button = ({
  variant,
  size,
  fullWidth,
  children,
  className,
  loading,
  loaderVariant,
  disabled,
  ...rest
}: IProps): React.ReactNode => {
  return (
    <button
      className={cn(
        themes({
          variant,
          size,
          fullWidth,
        }),
        className
      )}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && <Loader variant={variant} />}
      {children}
    </button>
  );
};

export class ZephyrButton {
  static primary(props: IProps): React.ReactNode {
    return (
      <Button
        variant={
          props.loading ? ButtonVariant.PRIMARY_LOADING : ButtonVariant.PRIMARY
        }
        {...props}
      />
    );
  }

  static secondary(props: IProps): React.ReactNode {
    return (
      <Button
        variant={
          props.loading
            ? ButtonVariant.SECONDARY_LOADING
            : ButtonVariant.SECONDARY
        }
        {...props}
      />
    );
  }
}
