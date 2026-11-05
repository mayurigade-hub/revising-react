function Msg ({userName, textColor}) {
    return (
        <div>
            <p style={{ color: textColor }}>Hello, {userName}!</p>
        </div>
    )
}

export default Msg;