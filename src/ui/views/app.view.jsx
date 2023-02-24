import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/actions/cards.actions';
import { API } from "../../redux/constantes";
import './styles/app.css';

import Loader from "../components/loader.component";
import CardsList from "../components/cardsList.component";
import GameInformation from '../components/gameInformations';
import FinalScore from '../components/finalScore.component';
import Quizz from '../components/quizz.component';

const App = () => {

  const dispatch = useDispatch();

  const cards = useSelector(state => state.cardsReducer.cards);
  const loader = useSelector(state => state.uiReducer.loader);

  const tries = useSelector(state => state.gameReducer.tries);
  const score = useSelector(state => state.gameReducer.score);
  const game = useSelector(state => state.gameReducer.game);
  const quizz = useSelector(state => state.gameReducer.quizz);
  const finalScore = useSelector(state => state.gameReducer.finalScore);

  useEffect(() => {
    dispatch(fetchCards(API.CARDS))
  }, [dispatch]);

  return (
    <div className="app">
      <div className="app-inner">
        {
          loader
          ? <Loader />
          : <>
              <GameInformation tries={tries} score={score} />
              <CardsList cards={cards} />
              <FinalScore finalScore={finalScore} endGame={!game} />
              <Quizz quizz={quizz} />
          </>
        }
      </div>
    </div>
  )
}



export default App;
