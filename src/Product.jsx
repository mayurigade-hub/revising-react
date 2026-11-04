import './Product.css'

function Product( {name, price, features} ) {
    return (
        <div className="product">
            <h2>{ name }</h2>
            <h3>Price: { price }</h3>
            <p> Features are: { features }</p>
        </div>

    )
}

export default Product;