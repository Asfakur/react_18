import { useState } from "react";

function App() {
    const [drink, setDrink] = useState({
        title: "Sprite",
        price: 30,
    });

    const handleClick = () => {
        setDrink({...drink, price: ++drink.price})
    };

    return (
        <div>
            title: {drink.title}
            price: {drink.price}
            <button onClick={handleClick}>Increase Price</button>
        </div>
    );
}

export default App;
