import './Product.css'

function Product( {name, price } ) {
    // Create a style object based on the price
    let styles = { backgroundColor: price > 30000 ? 'lightgreen' : 'yellow' }
    return (
        <div className="product" style={styles}>
            <h2>{ name }</h2>
            <h3>Price: { price }</h3>
            {/* Conditionals */}
            { price > 30000 ? <p> Discount is 5%</p> : <a href="/">Get Discount</a>}
            {/* One more method to write conditional rendering is using && operator. For example, if we want to show a message when the price is greater than 30000, we can use the following code:
            { price > 30000 && <p> Discount is 5%</p>} */}
        </div>

    )
}

export default Product;