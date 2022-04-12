import { useEffect, useState } from "react"
import getCart from "../utilities/getCart"

const useCart = (cars) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
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
    }, [cars])
    return [cart, setCart]
}
export default useCart