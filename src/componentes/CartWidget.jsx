import { GiShoppingCart } from "react-icons/gi";

const CartWidget = () => {
    return (
        <div className="carrito">
    <GiShoppingCart color="white" fontSize={'30px'} />
    <span>3</span>
    </div>
    )
}
export default CartWidget