import './Header.css';

import { Link, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';

import BurgerMenu from '../BurgerMenu/BurgerMenu';

import pathIconPlus from '../../images/icon/icon-plus.svg';

const Header = ({
  handleVisiblePopup,
  handleSignOut,
  userProfile,
  userUid,
  myUserUid,
}) => {
  const history = useHistory();
  const currentLocation = useLocation();

  const handleBackOnPage = () => {
    history.goBack();
  }

  function constructorHeader(){
    if(currentLocation.pathname === `/${myUserUid}`){ 
      return (  
        <div className="header__profile-wrapper">
          <p className="header__id-profile">{userProfile._id}</p>
          <div className="header__button-wrapper" onClick={event => event.stopPropagation()}>
             <button className="button header__button-add-card" onClick={handleVisiblePopup}>
              <img className="header__icon-add-card" src={pathIconPlus} alt="Икнока добавления"/>
            </button>
            <BurgerMenu 
              handleSignOut={handleSignOut}
            />
          </div>    
        </div>
      ) 
    } else if(currentLocation.pathname === userUid) {
      return (
        <div className="header__publications-wrapper">
          <p className="header__subscribers-id-profile">{userProfile._id}</p>
          <Link to="/">
            <button className="header__publications-button" onClick={handleBackOnPage}></button>
          </Link>
        </div>
      );
    }
    else if(currentLocation.pathname === '/subscribers'){
      return (
        <div className="header__publications-wrapper">
          <p className="header__subscribers-id-profile">Подписчики</p>
          <Link to="/">
            <button className="header__publications-button" onClick={handleBackOnPage}></button>
          </Link>
        </div>
      )
    }
    else {
      return (
        <div className="header__publications-wrapper">
          <p className="header__publications-id-profile">{userProfile._id}</p>
          <h1 className="header__publications-title">Публикации</h1>
          <button className="header__publications-button" onClick={handleBackOnPage}></button>
        </div>
      )
    }
  }

  return (
    <header className="header">
      {constructorHeader()}
    </header>
  );
}


export default Header;
