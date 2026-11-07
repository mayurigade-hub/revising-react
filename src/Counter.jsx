//Lets learn states in react

//If we are thinking ki after clicking on Increment button the Count:{count} will increase by 1 then we are wrong because in react we cannot change the value of a variable directly. We have to use state to change the value of a variable.

//In console, we can see that the value of count is increasing but in the UI it is not changing because react does not re-render the component when we change the value of a variable directly. We have to use state to change the value of a variable and re-render the component.

//for that we have to use useState hook which is a built-in hook in react. It is used to add state to a functional component. It returns an array with two elements. The first element is the current state value and the second element is a function that is used to update the state value. We can use this function to update the state value and re-render the component.
import { useState } from 'react';

export default function Counter() {
    let [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
        setCount(count + 1); 

        //Here, you can think that the value of count will increase by 2 after clicking on Increment button but it will not happen because react batches the state updates and re-renders the component only once. So, the value of count will increase by 1 after clicking on Increment button. If we want to increase the value of count by 2 then we have to use the previous state value to update the state value. We can do this by passing a function to the setCount function. This function will receive the previous state value as an argument and we can use this value to update the state value.

         //So we will do... Callback in updator fuction
        setCount ((currVal) => {
        return currVal + 1;
        })
        setCount ((currVal) => {
        return currVal + 1;
        })
    }
   
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}