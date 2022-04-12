const getCart = () => {
    let cart = {}
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
        cart = JSON.parse(storedCart)
    }
    return cart
}
export default getCart