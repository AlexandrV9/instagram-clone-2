import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Profile from "./Profile/Profile";
import CardList from "./CardList/CardList";
import Header from "../../common/Header/Header";
import PopupCreateCard from "./PopupCreateCard/PopupCreateCard";
import * as api from '../../utils/api';
import { 
  addInitialCards, 
  addNewCard
 } from '../../../features/cards/cardsSlice';
import Preloader from "../../common/Preloader/Preloader";

const MyAccount = ({
  onCardClick,
  onClose,
  handleSignOut,
  location,
  myUserUid,
  isActivePreloader,
  setIsActivePreloader
}) => {

  const cards =  useSelector((state) => state.cards.value);
  const dispatch = useDispatch();

  const [userProfile, setUserProfile] = React.useState([]);
  const [isOpenPopupCreateCard, setIsOpenPopupCreateCard] = React.useState(false);
  const userUid = location.pathname;

  const handleGetUserData = async (userUid) => {
    setIsActivePreloader(true);
    const userProfile = await api.getUserProfile(userUid);
    setUserProfile(userProfile);
    dispatch(addInitialCards(userProfile.cards));
    setIsActivePreloader(false);
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
    dispatch(addNewCard(newCard));
    setIsOpenPopupCreateCard(false);  
  }

  React.useEffect(() => {
    handleGetUserData(userUid);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
        <>
          
          {
            isActivePreloader ? 

            <Preloader />
            :
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
                onCardClick={onCardClick}
                onClose={onClose}
              />
            </>
            
          }
          
          <PopupCreateCard
            handleVisiblePopup = {handleVisiblePopup}
            isOpenPopupCreateCard ={isOpenPopupCreateCard}
            onAddCard={handleAddCard}
          />
        </>
      )
}

export default MyAccount;