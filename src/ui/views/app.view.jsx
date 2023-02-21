import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/actions/cards.actions';
import { API } from "../../redux/constantes"
import './styles/app.css';
import '../components/styles/quizz.css';

import Loader from "../components/loader.component";
import CardsList from "../components/cardsList.component";
import GameInformation from '../components/gameInformations';
import FinalScore from '../components/finalScore.component';

const App = () => {

  const dispatch = useDispatch();

  const cards = useSelector(state => state.cardsReducer.cards);
  const loader = useSelector(state => state.uiReducer.loader);

  const tries = useSelector(state => state.gameReducer.tries);
  const score = useSelector(state => state.gameReducer.score);
  const game = useSelector(state => state.gameReducer.game);
  const finalScore = useSelector(state => state.gameReducer.finalScore);

  useEffect(() => {
    dispatch(fetchCards(API.CARDS))
  }, [dispatch]);

  return (
    <div className="app">
      <div className="app-inner">
        <GameInformation tries={tries} score={score} />
        {
          loader
          ? <Loader />
          : <CardsList cards={cards} />
        }
      </div>
      <FinalScore finalScore={finalScore} endGame={!game} />
      <div className="quizz">
        <div className="quizz-inner">
          <div className="quizz-content">
            <span className='quizz-question-number'>1/3</span>
            <p className='quizz-question'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugit officia itaque animi adipisci cum, necessitatibus totam mollitia incidunt, quas magni eligendi illum dignissimos, cupiditate iusto. Cumque cum quos optio?</p>
          </div>
          <form className="quizz-form">
            <div className="quizz-form-questions">
              <label className="quiizz-form-checkbox">Choix 1<input type="checkbox" /></label>
              <label className="quiizz-form-checkbox">Choix 2<input type="checkbox" /></label>
              <label className="quiizz-form-checkbox">Choix 3<input type="checkbox" /></label>
              <label className="quiizz-form-checkbox">Choix 4<input type="checkbox" /></label>
            </div>
            <button className="quizz-form-button">Confirmer</button>
          </form>
        </div>
      </div>
    </div>
  )
}



export default App;
