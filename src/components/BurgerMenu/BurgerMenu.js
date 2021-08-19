import './BurgerMenu.css';
import React from 'react';

const BurgerMenu = () => {

  const [buttonBurger, setButtonBurger] = React.useState(false);

  // function handleClosePopupByOverlay(popup){ 
  //     return (event) => { 
  //       if (event.target === event.currentTarget) { 
          
  //       }; 
  //     } 
  //   } 

  const handleButtonBurgerClick = (event) => {

    if(event.target.classList.contains('navigation__burger')) {
      if(buttonBurger){
        setButtonBurger(false);
      }
      else {
        setButtonBurger(true);
      }
      return document.body.classList.toggle('page_lock');
    }
    if(event.target.classList.contains('navigation__burger-span')){
      if(buttonBurger){
        setButtonBurger(false);
      }
      else {
        setButtonBurger(true);
      }
      return document.body.classList.toggle('page_lock');
    }
  }

  return (
    <div className={`navigation__navbar-wrapper ${buttonBurger ? 'navigation__navbar-wrapper_active' : ''}`}>
  
      <div className={`navigation__burger ${buttonBurger ? 'navigation__burger_active' : ''}`} onClick={handleButtonBurgerClick}>
        <span className={`navigation__burger-span ${buttonBurger ? 'navigation__burger-span_active' : ''}`}></span>
      </div>
        
      <div className={`navigation__navbar ${buttonBurger ? 'navigation__navbar_active' : ''}`}>
  
        <nav className={`navigation__menu ${buttonBurger ? 'navigation__menu_active' : ''}`}>
          <ul className="navigation__menu-unordered-list">
            <li className="navigation__menu-list-item">
              <a href="#1" className="navigation__menu-link-item">Настройки</a>
            </li>
            <li className="navigation__menu-list-item">
              <a href="#2" className="navigation__menu-link-item">Архив</a>
            </li>
            <li className="navigation__menu-list-item">
              <a href="#3" className="navigation__menu-link-item">Ваши действия</a>
            </li>
            <li className="navigation__menu-list-item">
              <a href="#3" className="navigation__menu-link-item">QR-код</a>
            </li>
            <li className="navigation__menu-list-item">
              <a href="#3" className="navigation__menu-link-item">Сохранённые</a>
            </li>
            <li className="navigation__menu-list-item">
              <a href="#3" className="navigation__menu-link-item">Близкие друзья</a>
            </li>
            <li className="navigation__menu-list-item">
              <a href="#3" className="navigation__menu-link-item">Центр информации о COVID-19</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default BurgerMenu;