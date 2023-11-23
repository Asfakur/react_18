import { Fragment, useState } from "react";

function ListGroup() {
  const items = ["Fruits", "Vegetable", "Grocery", "Electronics"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {setSelectedIndex(index)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
