import './BurgerMenu.css';
import React from 'react';

import pathGearIcon from '../../images/icon/icon-gear.svg';
import pathArchiveIcon from '../../images/icon/icon-archive.svg';
import pathCertificateIcon from '../../images/icon/icon-certificate.svg';
import pathClockIcon from '../../images/icon/icon-clock.svg';
import pathListIcon from '../../images/icon/icon-list.svg';
import pathQrCodeIcon from '../../images/icon/icon-qr-code.svg';
import pathSaveIcon from '../../images/icon/icon-save.svg';

const BurgerMenu = () => {

  const [buttonBurger, setButtonBurger] = React.useState(false);

  // function handleClosePopupByOverlay(popup){ 
  //     return (event) => { 
  //       if (event.target === event.currentTarget) { 
          
  //       }; 
  //     } 
  //   } 

  const handleButtonBurgerClick = (event) => {

    console.log(event);

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
              <img src={pathGearIcon} className="navigation__menu-icon-item" alt="Иконка шестерёнки"/>
              <a href="#1" className="navigation__menu-link-item">Настройки</a>
            </li>
            <li className="navigation__menu-list-item">
              <img src={pathArchiveIcon} className="navigation__menu-icon-item" alt="Иконка архива"/>
              <a href="#2" className="navigation__menu-link-item">Архив</a>
            </li>
            <li className="navigation__menu-list-item">
              <img src={pathClockIcon} className="navigation__menu-icon-item" alt="Иконка часов"/>
              <a href="#3" className="navigation__menu-link-item">Ваши действия</a>
            </li>
            <li className="navigation__menu-list-item">
              <img src={pathQrCodeIcon} className="navigation__menu-icon-item" alt="Иконка QR-кода"/>
              <a href="#3" className="navigation__menu-link-item">QR-код</a>
            </li>
            <li className="navigation__menu-list-item">
              <img src={pathSaveIcon} className="navigation__menu-icon-item" alt="Иконка заметок"/>
              <a href="#3" className="navigation__menu-link-item">Сохранённые</a>
            </li>
            <li className="navigation__menu-list-item">
              <img src={pathListIcon} className="navigation__menu-icon-item" alt="Иконка списка"/>
              <a href="#3" className="navigation__menu-link-item">Близкие друзья</a>
            </li>
            <li className="navigation__menu-list-item">
              <img src={pathCertificateIcon} className="navigation__menu-icon-item" alt="Иконка сертификата"/>
              <a href="#3" className="navigation__menu-link-item">Центр информации о COVID-19</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default BurgerMenu;