import { useState } from "react";

function App() {
    const [customer, setCustomer] = useState({
        name: "Sun",
        address: {
            city: "Bangladesh",
            zipCode: 1206,
        },
    });

    const handleClick = () => {
        setCustomer({
            ...customer,
            address: { ...customer.address, zipCode: 1244 },
        });
    };

    return (
        <div>
            name: {customer.name}
            address: {customer.address.city + " " + customer.address.zipCode}
            <button onClick={handleClick}>Change Customer</button>
        </div>
    );
}

export default App;
