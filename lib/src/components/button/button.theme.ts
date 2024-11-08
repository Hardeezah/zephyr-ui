import { cva } from "class-variance-authority";

const themes = cva(
  "px-4 py-3 flex gap-x-2 items-center justify-center font-medium rounded-[5px] whitespace-nowrap text-sm md:text-base disabled:bg-primaryTint-s30/[50] disabled:cursor-not-allowed transition-all duration-300 rounded-[15px]",
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
          "bg-primaryTint-s10 text-white hover:bg-primaryTint-s0 disabled:bg-primaryTint-s70 fill-white",
        primaryLoading:
          "bg-primaryTint-s30 disabled:bg-primaryTint-s30 text-white hover:bg-primaryTint-s0 fill-white",
        secondary:
          "border bg-white border-transparent disabled:border-primaryTint-s30 hover:border-primaryTint-s0 text-primaryTint-s30 bg-white disabled:bg-transparent fill-primaryTint-s30",
        secondaryLoading:
          "border bg-white border-transparent  hover:border-primaryTint-s0 text-primaryTint-s30 bg-white disabled:bg-white fill-primaryTint-s30",
      },
    },
    defaultVariants: {
      variant: "primary",
      fullWidth: true,
    },
  }
);

export default themes;
