import './Product.css'

function Product( {name, price} ) {
    return (
        <div className="product">
            <h2>{ name }</h2>
            <h3>Price: { price }</h3>
        </div>

    )
}

export default Product;