import './Publications.css';
import Header from '../Header/Header';
import React from 'react';
import PublicationsItem from '../PublicationsItem/PublicationsItem';

const Publications = ({
  location,
}) => {
  return (
    <>
      <Header 
        userProfile={location.state.userProfile}
      />
      <section className="publications">
        <ul className="publications__unordered-list">
          {location.state.cards.map((item) => {
            return (
              <PublicationsItem
                userUid={location.state.userUid}  
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