import { GiShoppingCart } from "react-icons/gi";
import { useCart } from "../context/CartContext";


const CartWidget = () => {
    const {cartQuantity} = useCart()

    return (
        <div className="carritoWidget">
    <GiShoppingCart color="white" fontSize={'30px'} />
    { cartQuantity() > 0 && <span className="cuentaCarrito">{cartQuantity()}</span> }
    </div>
    )
}
export default CartWidget