import { createContext } from "react";

const CartContext = createContext({
    totalCart: 0,
    setNoCart: () => { }
})

export const OrderItems = createContext({
    items: {},
    setItems: () => { }
})

export default CartContext;