import { VariantProps } from "class-variance-authority";
import { cn } from "../../util/classnames-merge";
import themes from "./loader.theme";

interface LoaderProps extends VariantProps<typeof themes> {}

const Loader: React.FC<LoaderProps> = ({
  variant = "primary",
  size = "md",
}) => {
  return <div className={cn(themes({ variant, size }))} />;
};

export default Loader;
