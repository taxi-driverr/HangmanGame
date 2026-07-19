import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";

function PlayGame(){

    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"));

    // const {text}  = useParams();

    const {state} = useLocation();

    console.log(state);
    return (
        <>
           <h1>Play Game {state.wordSelected}  </h1>
           <Link to="/start" className="text-blue-400">Go to Start Game</Link>
        </>
    )
}
export default PlayGame;