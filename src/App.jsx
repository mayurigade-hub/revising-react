import './App.css'
import Title from './Title.jsx'

//named import is another type of immport where we can import multiple components from a single file.
//import { Title } from './Title.jsx'

function Description() {
  return <h1>This is my description!</h1>
}

function App() {
  return (
    <div>
      {/* rendering title component */}
      <Title />  
      {/* rendering description component */}
      <Description />  
    </div>
  )
}

export default App
