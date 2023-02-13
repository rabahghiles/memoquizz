import { useDispatch } from "react-redux";
import { flipCard } from "../../redux/actions/cards.actions";
import "./styles/card.css";

const Card = ({id, imgUrl, flipped, finded}) => {
    const dispatch = useDispatch();
    return (
        <div className="card" onClick={() => dispatch(flipCard(id))}>
            <div className="card-verso">MQ</div>
            <div className={`card-recto ${ flipped || finded ? 'card-recto__turned' : ''}`}>
                <img className="card-img"  src={imgUrl} alt="hello" />
            </div>
        </div>
    )
}

export default Card;