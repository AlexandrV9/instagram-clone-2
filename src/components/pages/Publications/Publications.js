import React from 'react';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router';

import './Publications.css';
import Header from '../../common/Header/Header';
import PublicationsItem from './PublicationsItem/PublicationsItem';

const Publications = () => {

  const history = useHistory();
  const cards =  useSelector((state) => state.cards.value);

  return (
    
    <>
      <Header />
      <section className="publications">
        <ul className="publications__unordered-list">
          {cards.map((item) => {
            return (
              <PublicationsItem
                userUid={history.location.state.userUid}  
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