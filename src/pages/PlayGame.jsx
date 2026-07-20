import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";

function PlayGame(){

    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"));

    // const {text}  = useParams();

    const {state} = useLocation();

    // console.log(state);
    return (
        <>
           <h1>Play Game </h1>
           <MaskedText text={state.wordSelected} guessedLetters={[]}/>
           <Link to="/start" className="text-blue-400">Go to Start Game</Link>
        </>
    )
}
export default PlayGame;