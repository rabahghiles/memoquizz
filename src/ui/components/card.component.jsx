import { useDispatch } from "react-redux";
import { flipCard } from "../../redux/actions/cards.actions";
import "./styles/card.css";

const Card = ({id, imgUrl, flipped, finded}) => {
    const dispatch = useDispatch();
    return (
        <div className="card">
            <div className={`card-inner ${ flipped || finded ? 'card-inner-flipped' : ''}`} onClick={() => dispatch(flipCard(id))}>
                <div className="card-front">MQ</div>
                <div className="card-back">
                    <img className="card-back-img" src={imgUrl} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Card;