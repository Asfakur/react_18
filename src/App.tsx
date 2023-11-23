import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Fruits", "Vegetable", "Grocery", "Electronics"];

  return (
    <div>
      <ListGroup items={items} heading="Category" />
    </div>
  );
}

export default App;