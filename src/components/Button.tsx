const Button = (props) => {
    return (
        <button className={`${props.color} ${props.textColor} w-full py-1 rounded-md font-semibold`}>
            {props.content}
        </button>
    )
}

export default Button
