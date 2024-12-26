import { ButtonType } from "../types/Component.types"

const Button = (props: ButtonType) => {
    return (
        <button className={`${props.color} ${props.textColor} w-full py-1 rounded-md font-semibold`}>
            {props.content}
        </button>
    )
}

export default Button
