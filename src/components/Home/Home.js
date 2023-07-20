import React, { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import ImageSlider from '../imageSlider/ImageSlider'
import ItemContainer from './ItemContainer'
import Footer from '../footer/Footer'
import CartContext from '../context'

export default function Home() {
    const [noCart, setNoCart] = useState(0);
    const [items, setItems] = useState(Array(9).fill(0));
    const modifyItem = (index, newValue) => {
        setItems((prevItems) => {
            const updatedItems = [...prevItems];
            updatedItems[index] = updatedItems[index] + Number(newValue);
            return updatedItems;
        });
    };

    const [meals, setMeals] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://http-request-da0ed-default-rtdb.firebaseio.com/meals.json');
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const responseData = await response.json();


            const tempData = [];
            let i = 1;
            for (const key in responseData) {
                tempData.push({
                    id: i++,
                    key: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    image: responseData[key].image,
                    price: responseData[key].price
                })
            }
            setMeals(tempData);
            //console.log(tempData);
            setLoading(false)
        }
        fetchMeals().catch((err) => {
            console.log(err.message)
        })
    }, [])

    return (
        <CartContext.Provider
            value={{
                totalCart: noCart,
                setNoCart: setNoCart,
                items: items,
                setItems: modifyItem,
            }}
        >
            <Navbar meals={meals} />
            <ImageSlider />
            {loading ? <>Something went wrong!</> : <ItemContainer setNoCart={setNoCart} meals={meals} />}
            <Footer />
        </CartContext.Provider >
    )
}
