import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo Switch 2', quantity: 5 },
    { productName: 'PlayStation 5', quantity: 3 },
    { productName: 'Xbox Series X', quantity: 0 },
    { productName: 'Steam Deck', quantity: 2 },
]

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>

            {itemsInCart.map(({ productName, quantity }) => (
                <ItemCounter key={productName} name={productName} quantity={quantity} />
            ))}

            {/* <ItemCounter name = "Nintendo Switch 2" quantity={5} />
            <ItemCounter name = "PlayStation 5" quantity={3} />
            <ItemCounter name = "Xbox Series X"/> */}
        </>
    )}