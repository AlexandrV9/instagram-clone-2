import './Header.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
  return (
    <header className="header">
      <p className="header__id-profile">info.3.7.9</p>
      <div className="header__wrapper">
       <BurgerMenu />
      </div>
    </header>
  );
}

export default Header;
