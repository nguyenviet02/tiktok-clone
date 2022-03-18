import clsx from 'clsx';

import styles from './SideBarFooter.module.scss';

function SideBarFooter() {
  return (
    <div className={clsx(styles.sideBarFooter)}>
      <p>This website is clone from Tiktok by Viet Nguyen !</p>
      <p>For more information about me: </p>
      <div className={clsx(styles.social)}>
        <a href="https://www.facebook.com/nguyenviet02">
          <button className={clsx(styles.btn)}>Facebook</button>
        </a>
        <a href="https://www.instagram.com/viet_nguyen_02">
          <button className={clsx(styles.btn)}> Instagram</button>
        </a>
        <a href="https://github.com/nguyenviet02">
          <button className={clsx(styles.btn)}> Github</button>
        </a>
      </div>
      <a href="https://nguyenviet02.github.io/My_Profile">
        <button className={clsx(styles.btnCV, styles.btn)}> My CV</button>
      </a>

      <p>© 2022 Viet Nguyen</p>
    </div>
  )
};

export default SideBarFooter;
