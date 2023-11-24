import { ReactNode } from "react";

interface Props{
    children: ReactNode;
}

function Alert({children}: Props) {
  return <div className="alert alert-danger">{children}</div>;
}

export default Alert;
