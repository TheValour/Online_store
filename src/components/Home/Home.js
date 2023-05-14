import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import ImageSlider from '../imageSlider/ImageSlider'
import ItemContainer from './ItemContainer'
import Footer from '../footer/Footer'
import CartContext from '../context'

export default function Home({ meals }) {
    const [noCart, setNoCart] = useState(0);
    const [items, setItems] = useState(Array(7).fill(0));
    const modifyItem = (index, newValue) => {
        setItems((prevItems) => {
            const updatedItems = [...prevItems];
            updatedItems[index] = updatedItems[index] + Number(newValue);
            return updatedItems;
        });
    };

    return (
        <CartContext.Provider
            value={{
                totalCart: noCart,
                setNoCart: setNoCart,
                items: items,
                setItems: modifyItem
            }}
        >
            <Navbar />
            <ImageSlider />
            <ItemContainer setNoCart={setNoCart} meals={meals} />
            <Footer />
        </CartContext.Provider >
    )
}
