import { useState } from 'react'    
import { genTicket, sum } from './helper.js'
import Ticket from './Ticket.jsx'

export default function Lottery({n, winningSum}) {
    let [ticket, setTicket] = useState(genTicket()); // To store the ticket numbers, In the first render, it will have 3 random numbers between 0-9

    let isWinning = sum(ticket) === winningSum; // To check if the sum of the ticket numbers is equal to 15

    let buyTicket = () => {
        setTicket(genTicket(n)); // To generate a new ticket with 3 random numbers between 0-9
    }

    return (
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <Ticket ticket={ticket} />
            </div>
            <br></br>
            <button onClick={buyTicket}>Buy Ticket</button>
            <br></br>
            <h3>{isWinning && 'Congratulations! You won!'}</h3>
        </div>
    )
}