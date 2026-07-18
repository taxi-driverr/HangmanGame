import getButtonStyle from "./getButtonStyle";

function Button({text, onClickHandler,styleType="primary",type="button"}) {
    //data : texts, events
    return (
        <button
            onClick = {onClickHandler}
            className={`text-white font-bold py-2 px-4 rounded ${getButtonStyle(styleType)}`}
            type={type}
        >
            {text}
        </button>
    );
}



export default Button;  