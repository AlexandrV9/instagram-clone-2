import './Subscribers.css';
import React from 'react';
import SubscriberItem from '../SubscriberItem/SubscriberItem';
import Header from '../Header/Header';
import firebase from 'firebase';

const Subscribers = ({
  myUserUid,
  userUid,
  location,
  // users,
  // otherUsersUid,
  // getOtherUser
}) => { 

  const [otherUsersUid, setOtherUsersUid] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  const getOtherUser = () => {
    firebase.database().ref("users").once('value', snapshot => {
      setUsers(snapshot.val());
      setOtherUsersUid(Object.keys(snapshot.val()).filter(item => item!==myUserUid));
    });
  }

  React.useEffect(() => {
    getOtherUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <Header 
        userUid={userUid}
        userProfile={location.state.userProfile}
        otherUsersUid={otherUsersUid}
      />
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