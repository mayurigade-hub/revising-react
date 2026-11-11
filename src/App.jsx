import './App.css'
import Lottery from './Lottery.jsx'
// import ToDoList from './ToDoList.jsx'
// import LudoBoard from './LudoBoard.jsx'
// import LikeButton from './LikeButton.jsx'
// import Counter from './Counter.jsx'
// import ProductTab from './ProductTab.jsx'
// import Msg from './msg.jsx'
// import Form from './Form.jsx'
// import Title from './Title.jsx'
// import Description from './description.jsx'

//named import is another type of immport where we can import multiple components from a single file.
//import { Title } from './Title.jsx'

function App() {
  return (
    <>
      <Lottery />

      {/* <p>Let's Learn States in react</p> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <Msg userName="Alice" textColor="blue" />
      <ProductTab /> */}
      {/* rendering title component */}
      {/* <Title />   */}
      {/* rendering description component */}
      {/* <Description />   */}
    </>
  )
}

//default export is a type of export where we can export only one component from a single file.
export default App
