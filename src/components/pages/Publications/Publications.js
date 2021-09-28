import React from 'react';
import { useSelector } from "react-redux";

import './Publications.css';
import Header from '../../common/Header/Header';
import PublicationsItem from './PublicationsItem/PublicationsItem';

const Publications = () => {

  const cards =  useSelector((state) => state.currentUser.value).cards;

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