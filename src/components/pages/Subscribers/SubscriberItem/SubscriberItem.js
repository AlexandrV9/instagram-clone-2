import './SubscriberItem.css';
import { useHistory } from 'react-router';

const SubscriberItem = ({
  userData,
  uid,
}) => {

  const history = useHistory();

  return (
    <li className="subscriber__menu-list-item" onClick={() => history.push(`/${uid}`)}>
      <div className="subscriber__menu-icon-item">
        <img className="subscriber__user-avatar" alt="Аватар" src={userData.avatar}/>
      </div>
      <p className="subscriber__user-name">{userData.name}</p>
    </li>
  );
}

export default SubscriberItem;