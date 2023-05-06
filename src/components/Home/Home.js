import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import ImageSlider from '../imageSlider/ImageSlider'
import ItemContainer from './ItemContainer'
import Footer from '../footer/Footer'
import CartContext from '../context'

export default function Home() {
    const [noCart, setNoCart] = useState(0);

    return (
        <CartContext.Provider
            value={{
                totalCart: noCart,
                setNoCart: setNoCart
            }}
        >
            <Navbar />
            <ImageSlider />
            <ItemContainer setNoCart={setNoCart} />
            <Footer />
        </CartContext.Provider >
    )
}
