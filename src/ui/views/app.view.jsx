import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/actions/cards.actions';
import { API } from "../../redux/constantes"
import './styles/app.css';

import Loader from "../components/loader.component";
import CardsList from "../components/cardsList.component";
import GameInformation from '../components/gameInformations';

const App = () => {

  const dispatch = useDispatch();
  const cards = useSelector(state => state.cardsReducer.cards);
  const loader = useSelector(state => state.uiReducer.loader);
  const tries = useSelector(state => state.gameReducer.tries);

  useEffect(() => {
    dispatch(fetchCards(API.CARDS))
  }, [dispatch]);

  return (
    <div className="app">
      <div className="app-inner">
        <GameInformation tries={tries} />
        {
          loader
          ? <Loader />
          : <CardsList cards={cards} />
        }
      </div>
    </div>
  )
}



export default App;
