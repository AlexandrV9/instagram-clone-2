import './Publications.css';

import Header from '../Header/Header';
import PublicationsItem from '../Publications-item/PublicationsItem';

const Publications = ({
  cards,
}) => {
  return (
    <>
      <Header />

      <section className="publications">
        <ul className="publications__unordered-list">
          {cards.map((item) => {
            return (
              <PublicationsItem
                key={item._id}
                card={item}
              />
            ) 
          })}

        </ul>

      </section>

    </>
    
    
  );
}

export default Publications;