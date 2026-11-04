import './App.css'
import ProductTab from './ProductTab.jsx'
// import Title from './Title.jsx'
// import Description from './description.jsx'

//named import is another type of immport where we can import multiple components from a single file.
//import { Title } from './Title.jsx'

function App() {
  return (
    <>
      <ProductTab />
      {/* rendering title component */}
      {/* <Title />   */}
      {/* rendering description component */}
      {/* <Description />   */}
    </>
  )
}

export default App
