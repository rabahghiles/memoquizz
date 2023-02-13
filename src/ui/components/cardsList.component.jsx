import "./styles/cardsList.css";

import Card from "./card.component";

const CardsList = ({cards = []}) => {
    return (
        <div className="cards-list">
            {
                cards.map(card => <Card
                    key={card.id}
                    id={card.id}
                    imgUrl={card.imgUrl}
                    flipped={card.flipped}
                    finded={card.finded}
                />)
            }
        </div>
    )
}

export default CardsList;