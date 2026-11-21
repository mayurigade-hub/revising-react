import { useState, useEffect } from "react";

export default function CounterUseEffect() {
    let [count, setCount] = useState(0);
    const updateCount = () => {
        setCount(count + 1);
    };

    // useEffect is a hook that allows you to perform side effects in function components. It takes two arguments: a function that contains the side effect code, and an optional array of dependencies that determine when the effect should run. In this case, the effect will run after every render, because no dependencies are provided.
    useEffect(function printSomething() {
        console.log("Count is updated")
    })

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={updateCount}>Increment</button>
        </div>
    )
}
