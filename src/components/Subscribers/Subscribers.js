import './Subscribers.css';
import firebase from 'firebase';
import React from 'react';
import SubscriberItem from '../SubscriberItem/SubscriberItem';
import Header from '../Header/Header';

const Subscribers = ({
  location,
  userUid
}) => {
  // console.log(location.state.userUid); // Не работает
  console.log(userUid);

  const [users, setUsers] = React.useState([]);
  const [otherUsersUid, setOtherUsersUid] = React.useState([]);


  const getOtherUser = () => {
    firebase.database().ref("users").once('value', snapshot => {
      setUsers(snapshot.val());
      setOtherUsersUid(Object.keys(snapshot.val()).filter(item => item!==userUid));
    });
  }

  React.useEffect(() => {
    getOtherUser();
  },[])

  return (
    <>
      <Header />
      <section className="subscribers">
        <nav className='subscribers__menu' onClick={event => event.stopPropagation()}>
          <ul className="subscribers__menu-unordered-list">
            {
              otherUsersUid.map((uid, index) => 
                <SubscriberItem 
                  uid={uid}
                  key={index}
                  userData={users[uid]}
                />
              )
            }
          </ul>
        </nav>
      </section>
    </>
    
  );
}

export default Subscribers;