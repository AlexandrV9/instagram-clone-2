import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

import './Profile.css';

const Profile = () => {
  
  const currentUser = useSelector((state) => state.currentUser.value);
  const history = useHistory();

  return (
    <section className="profile">
      <div className="profile__wrapper">
        
        <div className="profile__wrapper-image">
          <img className="profile__avatar" src={currentUser.avatar} alt="аватар пользователя"/>
        </div>

        <div className="profile__publications-followers-subscriptions">
          <nav>
            <ul className="profile__unordered-list">
              <li className="profile__item-list">
                <h2 className="profile__item-number">16</h2>
                <p className="profile__item-subtitle">Публикации</p>
              </li>
              <li className="profile__item-list" onClick={() => history.push('/subscribers')}>
                <h2 className="profile__item-number">102</h2>
                <p className="profile__item-subtitle">Подписчики</p>
              </li>
              <li className="profile__item-list">
                <h2 className="profile__item-number">237</h2>
                <p className="profile__item-subtitle">Подписки</p>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="profile__info-about-me">
        <h1 className="profile__name">{currentUser.name}</h1>
        <p className="profile__signature">Moscow</p>
      </div>

      <button className="button profile__button-edit">Редактировать профиль</button>
      
    </section>
  );
}
export default Profile;