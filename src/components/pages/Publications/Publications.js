import React from 'react';
import { useSelector } from "react-redux";

import './Publications.css';
import Header from '../../common/Header/Header';
import PublicationsItem from './PublicationsItem/PublicationsItem';

const Publications = ({
  location,
}) => {

  const cards =  useSelector((state) => state.cards.value);

  return (
    
    <>
      <Header 
        userProfile={location.state.userProfile}
      />
      <section className="publications">
        <ul className="publications__unordered-list">
          {cards.map((item) => {
            return (
              <PublicationsItem
                userUid={location.state.userUid}  
                userProfile={location.state.userProfile}
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