import './App.css'
import Lottery from './Lottery.jsx'
import { sum } from './helper.js'
// import Lottery from './Lottery.jsx'
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
    let winCondition = (ticket) => {
      return sum(ticket) === 15;
    }
  return (
    <>
      <Lottery n = {3} winCondition = { winCondition } />
       {/* winCondition function is passed as a prop to the Lottery component. The function checks if the sum of the ticket numbers is equal to 15. If it is, then the user wins the lottery. */}
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
