import { useState } from 'react'    
import './Lottery.css'
import { genTicket, sum } from './helper.js'

export default function Lottery() {
    let [ticket, setTicket] = useState(genTicket(3)); // To store the ticket numbers, In the first render, it will have 3 random numbers between 0-9

    let isWinning = sum(ticket) === 15; // To check if the sum of the ticket numbers is equal to 15

    let buyTicket = () => {
        setTicket(genTicket(3)); // To generate a new ticket with 3 random numbers between 0-9
    }

    return (
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br></br>
            <button onClick={buyTicket}>Buy Ticket</button>
            <br></br>
            <h3>{isWinning && 'Congratulations! You won!'}</h3>
        </div>
    )
}