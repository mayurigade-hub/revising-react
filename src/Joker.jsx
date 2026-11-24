import { useState,useEffect } from "react";

export default function Joker() {
    let [joke, setJoke] = useState([]);
    const URL = "https://icanhazdadjoke.com/";
    const fetchJoke = async () => {
    let response =  await fetch(URL, {
        headers: {
            Accept: "application/json"
        }
    });
    let jsonResponse = await response.json();
    setJoke(jsonResponse.joke);
    }
    
    useEffect(() => {
        async function getFirstJoke() {
        let response =  await fetch(URL, {
        headers: {
            Accept: "application/json"
        }
    });
    let jsonResponse = await response.json();
    setJoke(jsonResponse.joke);
    } 
    getFirstJoke(); 
    }, [])

    return(
        <div>
            <h1>Joker</h1>
            <p>Why so serious?</p>
            <p>{joke}</p>
            <button onClick={fetchJoke}>Fetch Joke</button>
        </div>
    )
}