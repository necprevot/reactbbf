import { GiShoppingCart } from "react-icons/gi";
import { CartContext, useCart } from "../context/CartContext";


const CartWidget = () => {
    const {cartQuantity} = useCart()

    return (
        <div className="carrito">
    <GiShoppingCart color="white" fontSize={'30px'} />
    { cartQuantity() > 0 && <span>{cartQuantity()}</span> }
    </div>
    )
}
export default CartWidget