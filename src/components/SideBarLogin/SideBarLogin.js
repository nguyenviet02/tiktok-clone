import clsx from 'clsx';

import styles from './SideBarLogin.module.scss';

function SideBarLogin() {
  return (
    <div className={clsx(styles.sideBarLogin)}>
      <span className={styles.content}>
        Đăng nhập để follow các tác giả, thích video và xem bình luận.
      </span>
      <button className={clsx(styles.btn)}>
        Đăng nhập
      </button>
    </div>
  )
};

export default SideBarLogin;