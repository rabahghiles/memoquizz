import "./styles/gameInformations.css";

const GameInformations = ({tries}) => {



    return (
        <div className="gameInformations">
            <span className="gameInformations-score">Score : 0</span>
            <span className="gameInformations-tries">Essai(s) : {tries}</span>
        </div>
    )
}

export default GameInformations;