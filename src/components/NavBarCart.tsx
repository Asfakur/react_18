import { useState } from "react";
import NavBar from "./NavBar";
import Cart from "./Cart";

const NavBarCart = () => {
    const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
    return (
        <div>
            <NavBar cartItemsCount={cartItems.length} />
            <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
        </div>
    );
};

export default NavBarCart;
