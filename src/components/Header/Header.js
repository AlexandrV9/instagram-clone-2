import './Header.css';

import { Link, useLocation } from 'react-router-dom';

import BurgerMenu from '../BurgerMenu/BurgerMenu';

import pathIconPlus from '../../images/icon/icon-plus.svg';

const Header = ({
  handleVisiblePopup,
  handleSignOut,
  isOtherUser,
  userUid,
}) => {

  const currentLocation = useLocation();

  function constructorHeader(){
    if(currentLocation.pathname === '/'){
      if(isOtherUser === userUid){
      return (
        <div className="header__profile-wrapper">
          <p className="header__id-profile">info.3.7.9</p>
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
      } else {
        return (
          <div className="header__publications-wrapper">
            <p className="header__subscribers-id-profile">info.3.7.9</p>
            <Link to="/subscribers">
              <button className="header__publications-button"></button>
            </Link>
          </div>
        )
      }
          
      }
    else if(currentLocation.pathname === '/subscribers'){
      return (
        <div className="header__publications-wrapper">
          <p className="header__subscribers-id-profile">info.3.7.9</p>
          <Link to="/">
            <button className="header__publications-button"></button>
          </Link>
        </div>
      )
    }
    else {
      return (
        <div className="header__publications-wrapper">
          <p className="header__publications-id-profile">info.3.7.9</p>
          <h1 className="header__publications-title">Публикации</h1>
          <Link to="/subscribers">
            <button className="header__publications-button"></button>
          </Link>
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
