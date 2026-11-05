import Product from './Product.jsx'

function ProductTab() {
return (
    <>
     {/* Here name and price are props which are passed to the Product component. Props are used to pass data from parent component to child component. */}
      <Product name="Laptop" price={40000} />
      <Product name="pen" price={10} />
      <Product name="Tablet" price={10000} />
    </>
)
}

export default ProductTab;