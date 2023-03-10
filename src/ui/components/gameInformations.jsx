import "./styles/gameInformations.css";

const GameInformations = ({tries, score}) => {
    return (
        <div className="gameInformations">
            <span className="gameInformations-score">Score : {score}</span>
            <span className="gameInformations-tries">Essai(s) : {tries}</span>
        </div>
    )
}

export default GameInformations;