import  { useState } from "react";

export default function LudoBoard() {

    //Object in react state is a way to store multiple values in a single state variable. It is an object that contains key-value pairs. The keys are the names of the values and the values are the actual values. We can use the setState function to update the values of the object. We can also use the spread operator to update the values of the object without losing the previous values.
    let [moves, setMoves] = useState({
        blue: 0,
        yellow: 0,
        red: 0,
        green: 0
    })

    let updateBlue = () => {
        console.log(`moves.blue = ${moves.blue}`)
        setMoves((prevMoves) => {
           return {...prevMoves, blue: prevMoves.blue + 1}
        });
    }

     let updateYellow = () => {
        console.log(`moves.yellow = ${moves.yellow}`)
        setMoves((prevMoves) => {
           return {...prevMoves, yellow: prevMoves.yellow + 1}
        });
    }

     let updateRed = () => {
        console.log(`moves.red = ${moves.red}`)
        setMoves((prevMoves) => {
           return {...prevMoves, red: prevMoves.red + 1}
        });
    }

     let updateGreen = () => {
        console.log(`moves.green = ${moves.green}`)
        setMoves((prevMoves) => {
           return {...prevMoves, green: prevMoves.green + 1}
        });
    }

    return(
        <div>
            <p>Game Begins</p>
            <div className="ludo-board">
                <p> Blue moves = { moves.blue }</p>
                <button style = {{ backgroundColor: "blue", color: "white" }} onClick = { updateBlue }> +1</button>
                <p> Yellow move = { moves.yellow }</p>
                <button style = {{ backgroundColor: "yellow", color: "black" }} onClick = { updateYellow }> +1</button>
                <p> red moves = { moves.red }</p>
                <button style = {{ backgroundColor: "red", color: "white" }} onClick = { updateRed }> +1</button>
                <p> Green moves = { moves.green }</p>
                <button style = {{ backgroundColor: "green", color: "white" }} onClick = { updateGreen }> +1</button>
            </div>
        </div>
    )
}