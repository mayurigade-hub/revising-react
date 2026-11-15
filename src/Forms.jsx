import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        Username: "",
        Password: ""
    });

    let ChangeHandler = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name]: event.target.value}
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            Username: "",
            Password: ""
        })
    }

    // let [fullName, setFullName] = useState("");
    // let [Username, setUsername] = useState("");

    // let ChangeHandler = (event) => {
    //     setFullName(event.target.value);
    // }

    // let changeUsernameHandler = (event) => {
    //     setUsername(event.target.value);
    // }
    return(
        <>
        <form onSubmit = {handleSubmit}>
            <label htmlFor="fullName">Name:</label>
            <input id="fullName" placeholder="Enter your name" type="text" name="fullName" value = {formData.fullName} onChange={ChangeHandler}/>
            <br/><br/>
            <label htmlFor="username">Username:</label>
            <input id="username" placeholder="Enter your username" type="text" name="Username" value = {formData.Username} onChange={ChangeHandler}/>
            <br/><br/>
            <input id="password" placeholder="Enter your password" type="password" name="Password" value = {formData.Password} onChange={ChangeHandler}/>
            <br/><br/>
            <button type="submit"> Submit </button>
        </form>
        </>
    )
}
