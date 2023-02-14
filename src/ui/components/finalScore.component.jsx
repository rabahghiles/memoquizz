import './styles/finalScore.css';

const FinalScore = ({finalScore, endGame}) => {
    return (
        <div className={`finalscore ${ endGame ? 'finalscore__showed' : ''}`}>
            <p className='finalscore-title'>Bravo ! Votre score final est :</p>
            <p className='finalscore-score'>{finalScore} pt(s)</p>
        </div>
    )
};

export default FinalScore;