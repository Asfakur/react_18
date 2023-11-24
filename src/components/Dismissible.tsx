import { Fragment, useState } from "react";
import Button from "./Button";

function Dismissible() {
  const [alert, setAlert] = useState(false);

  return (
    <Fragment>
      <div
        className={
          alert === true ? "alert alert-warning alert-dismissible" : "d-none"
        }
      >
        <strong>Alert</strong>
        <button className="btn-close" onClick={() => setAlert(false)}></button>
      </div>
      <Button onClick={() => setAlert(true)}>Get Alert</Button>
    </Fragment>
  );
}
export default Dismissible;
