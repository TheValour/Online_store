import React, { useEffect, useState } from 'react'
import Login from './components/login/Login'
import Home from './components/Home/Home';

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [meals, setMeals] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://http-request-da0ed-default-rtdb.firebaseio.com/Meals.json');
      const responseData = await response.json();


      const tempData = [];
      for (const key in responseData) {
        tempData.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          image: responseData[key].image,
          price: responseData[key].price
        })
      }
      setMeals(tempData);
      console.log(tempData);
      setLoading(false)
    }
    fetchMeals()
  }, [])

  return (
    <div>
      {!isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : loading ? (
        <>Loading...</>
      ) : (
        <Home meals={meals} />
      )}
    </div>
  );

}
