import './CardList.css'
import CardItem from '../CardItem/CardItem';
import pathImageItem from '../../images/car2.jpeg';

const CardList = ({
  cards,
  onCardClick,
  onClose,
}) => {
  return (
    <section className="photo-cards">
      <ul className="photo-cards__unordered-list">
        {cards.map((item) => {
          return (
            <CardItem 
              card={item}
              onCardClick={onCardClick}
              onClose={onClose}
            />
          ) 
        })}
        
        {/* <CardItem pathImageItem={pathImageItem} />
        <CardItem pathImageItem={pathImageItem} /> */}
        {/* <CardItem pathImageItem={pathImageItem} />
        <CardItem pathImageItem={pathImageItem} />
        <CardItem pathImageItem={pathImageItem} />
        <CardItem pathImageItem={pathImageItem} />
        <CardItem pathImageItem={pathImageItem} />
        <CardItem pathImageItem={pathImageItem} />
        <CardItem pathImageItem={pathImageItem} />
        <CardItem pathImageItem={pathImageItem} />
        <CardItem pathImageItem={pathImageItem} />
        <CardItem pathImageItem={pathImageItem} />
        <CardItem pathImageItem={pathImageItem} />
        <CardItem pathImageItem={pathImageItem} />
        <CardItem pathImageItem={pathImageItem} />
        <CardItem pathImageItem={pathImageItem} />
        <CardItem pathImageItem={pathImageItem} /> */}
      </ul>
    </section>
  );
}

export default CardList;