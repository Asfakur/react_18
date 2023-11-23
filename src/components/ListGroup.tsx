import { Fragment } from "react";

function ListGroup() {
  const items = ["Fruits", "Vegetable", "Grocery", "Electronics"];

  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;