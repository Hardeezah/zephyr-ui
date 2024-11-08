import React from "react";
import BaseButton, { IBaseButtonProps } from "./base-button";

enum ButtonVariant {
  PRIMARY = "primary",
  PRIMARY_LOADING = "primaryLoading",
  SECONDARY = "secondary",
  SECONDARY_LOADING = "secondaryLoading",
}

export class ZephyrButton {
  static primary(props: IBaseButtonProps): React.ReactNode {
    return (
      <BaseButton
        variant={
          props.loading ? ButtonVariant.PRIMARY_LOADING : ButtonVariant.PRIMARY
        }
        {...props}
      />
    );
  }

  static secondary(props: IBaseButtonProps): React.ReactNode {
    return (
      <BaseButton
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
