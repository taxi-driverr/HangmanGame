import TextInputForm from "./TextInputForm";
import { useState } from "react";
function TextInputFormContainer(){
    //presenter-container pattern : container component is responsible for handling the logic 
    // and state management, while the presenter component is responsible for rendering the UI 
    // and receiving data and events from the container component.

    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");

    function handleFormSubmit(e){
        e.preventDefault();
        console.log("Form submitted");
        console.log("Input value: ", value);
    }
    function handleTextInputChange(e){
        setValue(e.target.value);
        console.log("Text input changed: ", e.target.value);
    }
    function handleShowHideClick() {
        console.log("button clicked!")
        if(inputType === "password"){
            setInputType("text");
        }else{
            setInputType("password");
        }
    }
    return (
        <TextInputForm
            inputType = {inputType}
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
        />
    )
}
export default TextInputFormContainer;