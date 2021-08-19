import './Profile.css';
import pathCar from '../../images/car.jpeg';

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile__wrapper">
        
        <div className="profile__wrapper-image"></div>

        <div className="profile__publications-followers-subscriptions">
          <nav>
            <ul className="profile__unordered-list">
              <li class="profile__item-list">
                <a href="#1" class="profile__item-link">
                  <h2 class="profile__item-number">16</h2>
                  <p class="profile__item-subtitle">Публикации</p>
                </a>
              </li>
              <li class="profile__item-list">
                <a href="#2" class="profile__item-link">
                  <h2 class="profile__item-number">102</h2>
                  <p class="profile__item-subtitle">Подписчики</p>
                </a>
              </li>
              <li class="profile__item-list">
                <a href="#2" class="profile__item-link">
                  <h2 class="profile__item-number">237</h2>
                  <p class="profile__item-subtitle">Подписки</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="profile__info-about-me">
        <h1 className="profile__name">Иван</h1>
        <p className="profile__signature">Moscow</p>
      </div>

      <button className="button profile__button-edit">Редактировать профиль </button>
      
    </section>
  );
}
export default Profile;