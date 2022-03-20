import clsx from 'clsx';
import { useState, useRef, useContext } from 'react';

import styles from './SideBarUsers.module.scss';
import { DtbContext } from '../index';
import { User } from '../index';

function SideBarUsers() {
  const [dtbUsers, dtbVideos] = useContext(DtbContext);
  const [btnText, setBtnText] = useState("Xem tất cả");
  const btnRef = useRef();
  const handleClick = useRef();
  // const newDtbUsers = useRef(dtbUsers.slice(0, 5));
  const [newDtbUsers, setNewDtbUsers] = useState(dtbUsers.slice(0, 5));

  handleClick.current = () => {
    if (btnText === "Xem tất cả") {
      setNewDtbUsers(dtbUsers);
      setBtnText("Thu gọn");
    }
    else {
      setNewDtbUsers(dtbUsers.slice(0, 5));
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
          newDtbUsers.map(user => (
            <User
              key={user.id}
              userId={user.id}
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