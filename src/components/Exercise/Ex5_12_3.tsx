import { useState } from 'react'

const Ex5_12_3 = () => {
    const [cart, setCart] = useState({
        discount: 0.1,
        items: [
            { id: 1, title: "Product 1", quantity: 1 },
            { id: 2, title: "Product 2", quantity: 1 },
        ],
    });

    const handleClick = (id: number) => {
        setCart({
            ...cart,
            items: cart.items.map((item) =>
                item.id === id
                    ? { ...item, quantity: ++item.quantity }
                    : { ...item, quantity: item.quantity }
            ),
        });
    };

    return (
        <div>
            {cart.items.map((item) => (
                <div key={item.id}>
                    title: {item.title} quantity: {item.quantity}
                    <button onClick={() => handleClick(item.id)}>
                        Increase
                    </button>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Ex5_12_3