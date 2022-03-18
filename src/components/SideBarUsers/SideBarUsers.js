import clsx from 'clsx';
import { useState, useRef, useEffect } from 'react';

import styles from './SideBarUsers.module.scss';
import { User } from '../index';
import { dtbUsers } from '../index';

function SideBarUsers() {
  const [btnText, setBtnText] = useState("Xem tất cả");
  const btnRef = useRef();
  const handleClick = useRef();
  const newDtbUsers = useRef(dtbUsers.slice(0, 5));
  handleClick.current = () => {
    if (btnText === "Xem tất cả") {
      newDtbUsers.current = dtbUsers;
      setBtnText("Thu gọn");
    }
    else {
      newDtbUsers.current = dtbUsers.slice(0, 5);
      setBtnText("Xem tất cả");
    }
  }
  return (
    <div className={clsx(styles.sideBarUsers)}>
      <span className={styles.title}>
        Tài khoản được đề xuất
      </span>
      <div className={clsx(styles.UsersContainer)}>
        {
          newDtbUsers.current.map(user => (
            <User
              key={user.id}
              image={user.avatar}
              username={user.username}
              name={user.name}
              verified={user.verified}
              followers={user.followers}
              likes={user.likes}
            />
          ))
        }
      </div>
      <button
        onClick={handleClick.current}
        className={clsx(styles.btn)}
        ref={btnRef}
      >
        {btnText}
      </button>
    </div>
  )
};

export default SideBarUsers;