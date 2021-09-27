import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import Profile from "./Profile/Profile";
import CardList from "./CardList/CardList";
import Header from "../../common/Header/Header";
import PopupCreateCard from "./PopupCreateCard/PopupCreateCard";
import * as api from '../../../utils/api';

import { 
  addInitialCards, 
  addNewCard
} from '../../../features/cards/cardsSlice';

import { 
  addDataUser,
} from '../../../features/user/userSlice';

import Preloader from "../../common/Preloader/Preloader";

const MyAccount = ({
  handleSignOut,
  myUserUid,
  isActivePreloader,
  setIsActivePreloader
}) => {

  const history = useHistory();
  const userUid = history.location.pathname;
  const cards =  useSelector((state) => state.cards.value);
  
  const dispatch = useDispatch();

  const [isOpenPopupCreateCard, setIsOpenPopupCreateCard] = React.useState(false);

  const handleGetUserData = async (userUid) => {
    setIsActivePreloader(true);
    const dataUser = await api.getUserProfile(userUid);
    dispatch(addDataUser(dataUser))
    dispatch(addInitialCards(dataUser.cards));
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
                handleVisiblePopup={handleVisiblePopup}
                handleSignOut={handleSignOut}
              />
              <Profile 
                userUid={userUid}
              />
              <CardList 
                userUid={userUid}
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