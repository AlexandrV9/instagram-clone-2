import React from 'react';

import './Subscribers.css';
import SubscriberItem from './SubscriberItem/SubscriberItem';
import Header from '../../common/Header/Header';
import * as api from '../../../utils/api';

const Subscribers = ({
  myUserUid,
  userUid,
}) => { 

  const [otherUsersUid, setOtherUsersUid] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  const handleGetOtherUser = async (myUserUid) => {
    const allUsers = await api.getOtherUser();
    await setUsers(allUsers);
    await setOtherUsersUid(Object.keys(allUsers).filter(item => item!==myUserUid));
  }

  React.useEffect(() => {
    handleGetOtherUser(myUserUid);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <Header 
        userUid={userUid}
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