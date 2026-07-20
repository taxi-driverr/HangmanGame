import { getMaskedString } from "./MaskingUtility";

function MaskedText({text, guessedLetters}){
    const maskedCharArr = getMaskedString(text,guessedLetters);
    return(
        <>
            {maskedCharArr.map((char,index)=>{
                return(
                    <span key={index} className="mx-1">
                        {char}
                    </span>
                )
            })}
        </>
    )
}
export default MaskedText;