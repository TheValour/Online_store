import { createContext } from "react";

const CartContext = createContext({
    totalCart: 0,
    setNoCart: () => { }
})

export default CartContext;