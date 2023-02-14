import { useDispatch } from 'react-redux';
import { restartGame } from "../../redux/actions/game.actions";
import './styles/finalScore.css';

const FinalScore = ({finalScore, endGame}) => {

    const dispatch = useDispatch();

    const handleRestartingGame = () => {
        dispatch(restartGame());
    }

    return (
        <div className={`finalscore ${ endGame ? 'finalscore__showed' : ''}`}>
            <p className='finalscore-title'>Bravo ! Votre score final est :</p>
            <p className='finalscore-score'>{finalScore} pt(s)</p>
            <button className='finalscore-button' onClick={handleRestartingGame} >Rejouer</button>
        </div>
    )
};

export default FinalScore;