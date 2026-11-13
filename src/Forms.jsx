import { useState } from "react";

export default function Form() {
    let [fullName, setFullName] = useState("Mayuri");
    let ChangeHandler = (event) => {
        setFullName(event.target.value);
    }
    return(
        <>
        <form>
            <input placeholder="Enter your name" type="text" value = {fullName} onChange={ChangeHandler}/>
            <button type="submit"> Submit </button>
        </form>
        </>
    )
}
