function printHello() {
    console.log("Hello, World!");
}

export default function Button() {
    return (
        <div>
            <button onclick= { printHello }>Click Me</button>
        </div>
    );
}