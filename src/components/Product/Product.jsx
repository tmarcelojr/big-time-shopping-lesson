import { AiFillPlusSquare } from 'react-icons/ai'
// You have to pass the props in the parameter of the component
const Product = ({ product, addToCart, id }) => {
    // console.log('We are inside Product', props)
    return (
        <li>{product.name} costs ${product.price}. <small>{product.description}</small> <AiFillPlusSquare onClick={() => addToCart(product)}/> id:{id}</li>
    )
}

export default Product