import { cva } from "class-variance-authority";

const themes = cva(
  "px-4 py-3 flex gap-x-2 items-center justify-center font-medium rounded-[5px] whitespace-nowrap text-sm md:text-base disabled:bg-primary-300/[50] disabled:cursor-not-allowed transition-all duration-300 rounded-[15px]",
  {
    variants: {
      fullWidth: {
        true: "w-full max-w-full py-3",
      },
      size: {
        base: "w-full max-w-[182px]",
        lg: "w-full max-w-[250px]",
        fit: "w-fit",
      },
      variant: {
        primary:
          "bg-primary-300 text-white hover:bg-primary-400 disabled:bg-primary-100 fill-white",
        secondary:
          "border border-transparent disabled:border-primary-300 hover:border-primary-400 text-primary-300 bg-white disabled:bg-transparent fill-primary-300",
      },
    },
    defaultVariants: {
      variant: "primary",
      fullWidth: true,
    },
  }
);

export default themes;
