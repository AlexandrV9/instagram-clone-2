import './SubscriberItem.css';
import { useHistory } from 'react-router';

const SubscriberItem = ({
  userData,
  uid,
}) => {
  
  const history = useHistory();

  const handleTransitionAnotherProfile = () => {
    history.push(`/${uid}`, {userUid: uid})
  }

  return (
    <li className="subscriber__menu-list-item" onClick={handleTransitionAnotherProfile}>
      <div className="subscriber__menu-icon-item">
        <img className="subscriber__user-avatar" alt="Аватар" src={userData.avatar}/>
      </div>
      <p className="subscriber__user-name">{userData.name}</p>
    </li>
  );
}

export default SubscriberItem;