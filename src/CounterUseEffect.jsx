import { useState, useEffect } from "react";

export default function CounterUseEffect() {
    let [countX, setCountX] = useState(0);
    let [countY, setCountY] = useState(0);

    const updateCountX = () => {
        setCountX(countX + 1);
    };
    const updateCountY = () => {
        setCountY(countY + 1);
    };

    // useEffect is a hook that allows you to perform side effects in function components. It takes two arguments: a function that contains the side effect code, and an optional array of dependencies that determine when the effect should run. In this case, the effect will run after every render, because no dependencies are provided.
    // useEffect(function printSomething() {
    //     console.log("Count is updated")
    // })

    // here, we are using useEffect to log a message to the console whenever countX is updated. The second argument to useEffect is an array containing countX, which means that the effect will only run when countX changes. This is useful for optimizing performance and avoiding unnecessary side effects.
    useEffect(function printSomething() {
        console.log("Count is updated")
    }, [countX]) 

    return(
        <div>
            <p>CountX: {countX}</p>
            <button onClick={updateCountX}>Increment in X</button>
            <p>CountY: {countY}</p>
            <button onClick={updateCountY}>Increment in Y</button>
        </div>
    )
}
