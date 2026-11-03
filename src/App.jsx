import './App.css'

function Title() {
  return <h1>This is my title!</h1>
}
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
