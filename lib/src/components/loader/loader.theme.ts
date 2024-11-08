import { cva } from "class-variance-authority";
const commonClasses = {
  primary: "border-white",
  secondary: "border-primaryTint-s30",
};
const themes = cva(
  "!border-t-transparent border rounded-full animate-spin bg-transparent w-4 h-4 animate-spin",
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
      },
      variant: {
        primary: commonClasses.primary,
        primaryLoading: commonClasses.primary,
        secondary: commonClasses.secondary,
        secondaryLoading: commonClasses.secondary,
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export default themes;
