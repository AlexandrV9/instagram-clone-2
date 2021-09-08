import React from 'react';

import './Subscribers.css';
import SubscriberItem from './SubscriberItem/SubscriberItem';
import Header from '../../common/Header/Header';
import * as api from '../../utils/api';

const Subscribers = ({
  myUserUid,
  userUid,
  location,
}) => { 

  const [otherUsersUid, setOtherUsersUid] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  const handleGetOtherUser = async (myUserUid) => {
    const allOtherUsers = await api.getOtherUser();
    await setUsers(allOtherUsers);
    await setOtherUsersUid(Object.keys(allOtherUsers).filter(item => item!==myUserUid));
  }

  React.useEffect(() => {
    handleGetOtherUser(myUserUid);
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