import React from "react";
import { cn } from "../../util/classnames-merge";
import modalTheme from "./modal.theme";
import { type VariantProps } from "class-variance-authority";

interface IProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalTheme> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal = ({ children, ...props }: IProps): React.ReactNode => {
  if (!props.isOpen) return null;

  return (
    <>
      <ModalOverlay onClose={props.onClose} />
      <ModalContent {...props}>{children}</ModalContent>
    </>
  );
};

const ModalOverlay = ({
  onClose,
}: {
  onClose: () => void;
}): React.ReactNode => {
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black opacity-50" />
  );
};

const ModalContent = ({
  children,
  size,
  className,
  ...rest
}: IProps): React.ReactNode => {
  return (
    <div className={cn(modalTheme({ size }), className)} {...rest}>
      <div className="r">{children}</div>
    </div>
  );
};

export class ZephyrModal {
  static default(props: IProps): React.ReactNode {
    return <Modal {...props} />;
  }
}
