function handleFormSubmit(event) {
    // Prevent the default form submission behavior That means the page will not reload when the form is submitted.
    // and form submitted will appear properly
    event.preventDefault();
    console.log("Form submitted!");
}


export default function Form() {
    return (
        <form onSubmit={ handleFormSubmit }>
            <input type="text" placeholder="Enter your name"/>
            <button type="submit">Submit</button>
        </form>
    )
}