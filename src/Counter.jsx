//Lets learn states in react
//If we are thinking ki after clicking on Increment button the Count:{count} will increase by 1 then we are wrong because in react we cannot change the value of a variable directly. We have to use state to change the value of a variable.
//In console, we can see that the value of count is increasing but in the UI it is not changing because react does not re-render the component when we change the value of a variable directly. We have to use state to change the value of a variable and re-render the component.

export default function Counter() {
    let count = 0;
    function increment() {
        count++;
        console.log(count);
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}