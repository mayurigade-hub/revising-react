function Title() {
  return (
    <>
    <h1>This is my title!</h1>
    {/* JSX in curly braces is treated as JS expression and will be evaluated and rendered in the UI.  */}
    <p> 2 * 2 = { 2 * 2 } </p>
    </>
  )
}

export default Title;

//named export is another type of export where we can export multiple components from a single file.
//export { Title }