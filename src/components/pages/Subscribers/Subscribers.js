import React from 'react';
import { useSelector } from "react-redux";

import './Subscribers.css';
import SubscriberItem from './SubscriberItem/SubscriberItem';
import Header from '../../common/Header/Header';
import * as api from '../../../utils/api';

const Subscribers = () => { 

  const [otherUsersUid, setOtherUsersUid] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  const loggedInUser = useSelector((state) => state.loggedInUser.value);

  const handleGetOtherUser = async () => {
    const allUsers = await api.getOtherUser();
    setUsers(allUsers);
    setOtherUsersUid(Object.keys(allUsers).filter(item => item!==loggedInUser));
  }

  React.useEffect(() => {
    handleGetOtherUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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