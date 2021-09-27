import { useHistory } from 'react-router';
import { useSelector } from "react-redux";

import './Header.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = ({
  handleVisiblePopup,
  handleSignOut,
  userUid,
  myUserUid,
}) => {
  
  const history = useHistory();

  const user = useSelector((state) => state.user.value);
  
  const handleBackOnPage = () => {
    history.goBack();
  }

  return (
    <header className="header">

      { history.location.pathname === `/${myUserUid}` && 
        <>
          <div className="header__profile-wrapper">
            <p className="header__id-profile">{user._id}</p>
            <div className="header__button-wrapper" onClick={event => event.stopPropagation()}>
              <button className="button header__button-add-card" onClick={handleVisiblePopup} />
              <BurgerMenu handleSignOut={handleSignOut} />
            </div>  
          </div>
        </>
      }

      {history.location.pathname !== `/${myUserUid}` && 
        <div className="header__publications-wrapper">
          { history.location.pathname === userUid && `/${myUserUid}` !== userUid && 
            <>
              <p className="header__subscribers-id-profile">{user._id}</p>
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
              <p className="header__publications-id-profile">{user._id}</p>
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
