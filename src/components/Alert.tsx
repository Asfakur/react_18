import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

function Alert({ children, onClose }: Props) {
  return (
    <div className="alert alert-warning alert-dismissible">
      {children}
      <button className="btn-close" onClick={onClose}></button>
    </div>
  );
}

export default Alert;
