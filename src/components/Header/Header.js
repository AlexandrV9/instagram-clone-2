import './Header.css';

import { Link, useLocation } from 'react-router-dom';

import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {

  const currentLocation = useLocation().pathname;
  return (
    <header className="header">
        {currentLocation === '/' ? 

          (<>
            <div className="header__profile-wrapper">
              <p className="header__id-profile">info.3.7.9</p>
              <BurgerMenu />
            </div>
          </>)
          
          : 
          
          (<div className="header__publications-wrapper">
            <p className="header__publications-id-profile">info.3.7.9</p>
            <h1 className="header__publications-title">Публикации</h1>
            <Link to="/">
              <button className="header__publications-button"></button>
            </Link>
          </div>)

        }
      
    </header>
  );
}

export default Header;
