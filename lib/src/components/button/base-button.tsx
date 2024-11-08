import { cn } from "../../util/classnames-merge";
import themes from "./button.theme";
import Loader from "../loader";
import { VariantProps } from "class-variance-authority";

export interface IBaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof themes> {
  loading?: boolean;
  loaderVariant?: "primaryLoading" | "secondaryLoading";
}
const BaseButton = ({
  variant,
  size,
  fullWidth,
  children,
  className,
  loading,
  loaderVariant,
  disabled,
  ...rest
}: IBaseButtonProps): React.ReactNode => {
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

export default BaseButton;
