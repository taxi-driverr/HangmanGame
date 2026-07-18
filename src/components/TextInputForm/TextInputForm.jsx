import Button from "../Button/Button";
import TextInput from "../TextInput/textInput";

function TextInputForm({inputType,handleFormSubmit, handleTextInputChange, handleShowHideClick}) {
    
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                    label="Name"
                    type={inputType}
                    placeholder="Enter your name"
                    onChangeHandler={handleTextInputChange}
                />
            </div>
            <div>
                <Button
                    text={inputType === "password" ? "Show" : "Hide"}
                    styleType="warning"
                    onClickHandler={handleShowHideClick}
                />
            </div>
             <div>
                <Button
                    text="Submit"
                    styleType="primary"
                    type="submit"
                />
            </div>
        </form>
    )
}
export default TextInputForm;