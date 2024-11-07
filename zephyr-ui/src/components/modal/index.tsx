import React from "react";
import { cn } from "../../lib/utils";
import modalTheme from "./modal.theme";
import { VariantProps } from "class-variance-authority";

interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalTheme> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ children, ...props }) => {
  if (!props.isOpen) return null;

  return (
    <>
      <ModalOverlay onClose={props.onClose} />
      <ModalContent {...props}>{children}</ModalContent>
    </>
  );
};

export default Modal;

const ModalOverlay = ({ onClose }: { onClose: () => void }) => {
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black opacity-50 " />
  );
};

const ModalContent: React.FC<ModalProps> = ({
  children,
  size,
  className,
  ...rest
}) => {
  return (
    <div className={cn(modalTheme({ size }), className)} {...rest}>
      <div className="r">{children}</div>
    </div>
  );
};
