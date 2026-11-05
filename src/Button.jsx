function onClick() {
    console.log("Hello, World!");
}

function handleOver() {
    console.log("Mouse is over the para!");
}

export default function Button() {
    return (
        <div>
            <button onClick= { onClick }>Click Me</button>
            <p onMouseOver={ handleOver }>Hover over me!</p>
        </div>
    );
}