import { FcFullTrash } from 'react-icons/fc'

const CartItem = ({ product, removeFromCart, id }) => {
    return (
        <li>{product.name} costs ${product.price}. <small>{product.description}</small> <FcFullTrash onClick={() => removeFromCart(product)}/> id:{id}</li>
    );
}

export default CartItem;



