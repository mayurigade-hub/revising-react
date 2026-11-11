import { useState } from 'react'    
import './Lottery.css'
import { genTicket } from './helper.js'

export default function Lottery() {
    let [ticket, setTicket] = useState(genTicket(3)); // To store the ticket numbers, In the first render, it will have 3 random numbers between 0-9
    return (
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
        </div>
    )
}