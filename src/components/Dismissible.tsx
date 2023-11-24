import { Fragment, useState } from "react";
import Button from "./Button";
import Alert from "./Alert";

function Dismissible() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <Fragment>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert Message</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Get Alert</Button>
    </Fragment>
  );
}
export default Dismissible;
