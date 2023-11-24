import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Fruits", "Vegetable", "Grocery", "Electronics"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Category"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;