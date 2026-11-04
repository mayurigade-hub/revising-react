import Product from './Product.jsx'

function ProductTab() {
return (
    <>
     {/* Here name and price are props which are passed to the Product component. Props are used to pass data from parent component to child component. */}
      <Product name="Laptop" price={40000} features={["hi-tech", "powerful"]} />
      <Product name="pen" price={10} features={["write", "draw"]} />
      <Product name="Tablet" price={10000} features={["portable", "touchscreen"]} />
    </>
)
}

export default ProductTab;