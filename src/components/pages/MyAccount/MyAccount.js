import React from "react";

import Profile from "./Profile/Profile";
import CardList from "./CardList/CardList";
import Header from "../../common/Header/Header";
import PopupCreateCard from "./PopupCreateCard/PopupCreateCard";
import * as api from '../../utils/api';

const MyAccount = ({
  onCardClick,
  onClose,
  handleSignOut,
  location,
  myUserUid,
}) => {

  const [userProfile, setUserProfile] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [isOpenPopupCreateCard, setIsOpenPopupCreateCard] = React.useState(false);
  const userUid = location.pathname;

  const handleGetUserProfile = async (userUid) => {
    const userProfile = await api.getUserProfile(userUid);
    await setUserProfile(userProfile);
  }

  const handleGetAllCards = async (userUid) => {
    const allCards = await api.getAllCards(userUid);
    await setCards(allCards);
  }

  const handleVisiblePopup = () => {
    document.body.classList.toggle('page_lock');
    setIsOpenPopupCreateCard(!isOpenPopupCreateCard);
  }

  const handleAddCard = async ({
    link,
    textLocation,
    textDescription,
  }) => {
    const newCard = await api.addCard({
      link,
      textLocation,
      textDescription,
      cards,
      myUserUid,
    });
    await setCards([...cards, newCard]);
    await setIsOpenPopupCreateCard(false);  
  }

  React.useEffect(() => {
    handleGetUserProfile(userUid);
    handleGetAllCards(userUid);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
        <>
          <Header 
            myUserUid={myUserUid}
            userUid={userUid}
            userProfile={userProfile}
            handleVisiblePopup={handleVisiblePopup}
            handleSignOut={handleSignOut}
          />
          <Profile 
            userUid={userUid}
            userProfile={userProfile}
          />
          <CardList 
            myUserUid={myUserUid}
            userUid={userUid}
            userProfile={userProfile}
            cards={cards}
            onCardClick={onCardClick}
            onClose={onClose}
          />
          <PopupCreateCard
            handleVisiblePopup = {handleVisiblePopup}
            isOpenPopupCreateCard ={isOpenPopupCreateCard}
            onAddCard={handleAddCard}
          />
        </>
      )
}

export default MyAccount;