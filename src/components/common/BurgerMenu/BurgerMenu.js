import './BurgerMenu.css';
import React from 'react';

import pathGearIcon from '../../../images/icon/icon-gear.svg';
import pathArchiveIcon from '../../../images/icon/icon-archive.svg';
import pathCertificateIcon from '../../../images/icon/icon-certificate.svg';
import pathClockIcon from '../../../images/icon/icon-clock.svg';
import pathListIcon from '../../../images/icon/icon-list.svg';
import pathQrCodeIcon from '../../../images/icon/icon-qr-code.svg';
import pathSaveIcon from '../../../images/icon/icon-save.svg';
import pathIconMenu from '../../../images/icon/icon-menu.svg';

const BurgerMenu = ({
  handleSignOut
}) => {

  const [isVisible, setVisible] = React.useState(false);
  
  const handleVisibleMenu = () => {
    setVisible(!isVisible);
    document.body.classList.toggle('page_lock');

  }
  const handleButtonSignOut = () => {
    handleSignOut();
  }

  return (
    <>
      <button className='navigation__button-burger' onClick={handleVisibleMenu}>
        <img className="navigation__burger-image" alt="Иконка меню" src={pathIconMenu}/>
      </button>
        
      <div className={`navigation ${isVisible ? 'navigation_active' : ''}`} onClick={handleVisibleMenu}>
  
        <nav className={`navigation__menu ${isVisible ? 'navigation__menu_active' : ''}`} onClick={event => event.stopPropagation()}>
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
          <button className="navigation__menu-button-signout" onClick={handleButtonSignOut}>Выйти из аккаунта</button>
        </nav>
      </div>
    </>
  );
}

export default BurgerMenu;