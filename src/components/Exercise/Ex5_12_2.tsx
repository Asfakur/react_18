import { useState } from 'react'

const Ex5_12_2 = () => {
    const [pizza, setPizza] = useState({
        name: "Spicy Pepperoni",
        toppings: ["Mushroom"],
    });

    const handleClick = () => {
        setPizza({
            ...pizza,
            toppings: [...pizza.toppings, "Cheese"],
        });
    };

    return (
        <div>
            <ul>
                {pizza.toppings.map((top) => (
                    <li key={top}>{top}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default Ex5_12_2