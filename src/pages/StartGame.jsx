import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInutFormContainer";
function StartGame(){
    return (
        <>
           <h1>Start Game</h1>
           <TextInputFormContainer />
           <Link to="/play" className="text-blue-400">Go to Play Game</Link>
        </>
    )
}
export default StartGame;