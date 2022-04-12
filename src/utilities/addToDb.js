const addToDb = (id) => {
    let cart = {}
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
        cart = JSON.parse(storedCart)
    }
    if (cart[id]) {
        cart[id] += 1
    }
    else {
        cart[id] = 1
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}
export default addToDb