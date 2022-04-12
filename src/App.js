import './App.css'
import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import useCars from "./hooks/useCars";
import useCart from "./hooks/useCart";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Signup from "./Pages/Signup/Signup";
import addToDb from "./utilities/addToDb";
import getCart from "./utilities/getCart";
import removeAll from "./utilities/removeAll";
export const CarContext = createContext()

function App() {
  const [cars, setCars] = useCars()
  const [cart, setCart] = useCart(cars)
  const handleRemoveAll = () => {
    removeAll()
    setCart([])
  }
  const handleAddToCart = (id) => {
    addToDb(id)
    const cart = getCart()
    const currentCart = []
    for (let id in cart) {
      const findById = cars.find(c => c.id === id)
      if (findById) {
        const quantity = cart[id]
        findById.quantity = quantity
        currentCart.push(findById)
      }
    }
    setCart(currentCart)
  }
  return (
    <CarContext.Provider value={{ cars, setCars, handleAddToCart, cart, handleRemoveAll }}>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </CarContext.Provider>
  );
}

export default App;
