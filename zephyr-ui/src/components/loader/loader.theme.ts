import { cva } from "class-variance-authority";

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
        primary: "border-white",
        secondary: "border-primary-300",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export default themes;
