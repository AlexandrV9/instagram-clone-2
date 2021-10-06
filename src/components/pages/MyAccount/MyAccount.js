import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import Profile from "./Profile/Profile";
import CardList from "./CardList/CardList";
import Header from "../../common/Header/Header";
import PopupCreateCard from "./PopupCreateCard/PopupCreateCard";
import Preloader from "../../common/Preloader/Preloader";
import * as api from '../../../utils/api';

import { 
  addCurrentDataUser,
  addNewCard,
  addCurrentUserId,
} from '../../../features/currenUser/currentUserSlice';

const MyAccount = ({
  handleSignOut,
  isActivePreloader,
  setIsActivePreloader
}) => {

  const [isOpenPopupCreateCard, setIsOpenPopupCreateCard] = React.useState(false);
  
  const history = useHistory();
  const dispatch = useDispatch();

  const userUid = history.location.pathname;
  
  const myUserUid = useSelector((state) => state.loggedInUser.value);
  const cards =  useSelector((state) => state.currentUser.value).cards;
  
  
  const handleGetUserData = async (userUid) => {
    setIsActivePreloader(true);
    const dataUser = await api.getUserProfile(userUid);
    dispatch(addCurrentDataUser(dataUser));
    dispatch(addCurrentUserId(userUid));
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
      myUserUid: myUserUid,
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
                handleVisiblePopup={handleVisiblePopup}
                handleSignOut={handleSignOut}
              />
              <Profile />
              <CardList />
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