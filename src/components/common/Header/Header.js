import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';

import './Header.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

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

  return (
    <header className="header">

      { currentLocation.pathname === `/${myUserUid}` && 
        <>
          <div className="header__profile-wrapper">
            <p className="header__id-profile">{userProfile._id}</p>
            <div className="header__button-wrapper" onClick={event => event.stopPropagation()}>
              <button className="button header__button-add-card" onClick={handleVisiblePopup} />
              <BurgerMenu handleSignOut={handleSignOut} />
            </div>  
          </div>
        </>
      }

      {currentLocation.pathname !== `/${myUserUid}` && 
        <div className="header__publications-wrapper">
          { currentLocation.pathname === userUid && `/${myUserUid}` !== userUid && 
            <>
              <p className="header__subscribers-id-profile">{userProfile._id}</p>
              <button className="header__publications-button" onClick={handleBackOnPage} />
            </>
          }

          { currentLocation.pathname === '/subscribers' && 
            <>
              <p className="header__subscribers-id-profile">Подписчики</p>
              <button className="header__publications-button" onClick={handleBackOnPage} />
            </>
          }

          {
            currentLocation.pathname === '/publications/' && 
            <>
              <p className="header__publications-id-profile">{userProfile._id}</p>
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
