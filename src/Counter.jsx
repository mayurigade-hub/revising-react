//Lets learn states in react

//If we are thinking ki after clicking on Increment button the Count:{count} will increase by 1 then we are wrong because in react we cannot change the value of a variable directly. We have to use state to change the value of a variable.

//In console, we can see that the value of count is increasing but in the UI it is not changing because react does not re-render the component when we change the value of a variable directly. We have to use state to change the value of a variable and re-render the component.

//for that we have to use useState hook which is a built-in hook in react. It is used to add state to a functional component. It returns an array with two elements. The first element is the current state value and the second element is a function that is used to update the state value. We can use this function to update the state value and re-render the component.
import { useState } from 'react';

export default function Counter() {
    let [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}