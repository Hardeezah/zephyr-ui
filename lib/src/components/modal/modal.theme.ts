import { cva } from "class-variance-authority";

const modalTheme = cva(
  "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-auto max-w-3xl mx-auto my-6 bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none",
  {
    variants: {
      // You can add variants here if needed
      size: {
        base: "w-full max-w-[500px]",
        lg: "w-full max-w-3xl",
      },
    },
    defaultVariants: {
      // You can set default variants here if needed
    },
  }
);

export default modalTheme;
