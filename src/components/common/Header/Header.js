import { useHistory } from 'react-router';
import { useSelector } from "react-redux";

import './Header.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = ({
  handleVisiblePopup,
  handleSignOut,
}) => {
  
  const history = useHistory();

  const loggedInUser = useSelector((state) => state.loggedInUser.value);
  const currentUser = useSelector((state) => state.currentUser.value);
  const userId =  useSelector((state) => state.currentUser.value).userId;
  
  const handleBackOnPage = () => {
    history.goBack();
  }

  return (
    <header className="header">

      { history.location.pathname === `/${loggedInUser}` && 
        <>
          <div className="header__profile-wrapper">
            <p className="header__id-profile">{currentUser._id}</p>
            <div className="header__button-wrapper" onClick={event => event.stopPropagation()}>
              <button className="button header__button-add-card" onClick={handleVisiblePopup} />
              <BurgerMenu handleSignOut={handleSignOut} />
            </div>  
          </div>
        </>
      }

      {history.location.pathname !== `/${loggedInUser}` && 
        <div className="header__publications-wrapper">
          { history.location.pathname === userId && `/${loggedInUser}` !== userId && 
            <>
              <p className="header__subscribers-id-profile">{currentUser._id}</p>
              <button className="header__publications-button" onClick={handleBackOnPage} />
            </>
          }

          { history.location.pathname === '/subscribers' && 
            <>
              <p className="header__subscribers-id-profile">Подписчики</p>
              <button className="header__publications-button" onClick={handleBackOnPage} />
            </>
          }

          {
            history.location.pathname === '/publications/' && 
            <>
              <p className="header__publications-id-profile">{currentUser._id}</p>
              <h1 className="header__publications-title">Публикации</h1>
              <button className="header__publications-button" onClick={handleBackOnPage} />
            </>
        }
        </div>
      }
    </header>
  );
}


export default Header;
