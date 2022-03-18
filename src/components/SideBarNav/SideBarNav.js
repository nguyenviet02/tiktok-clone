import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

import styles from './SideBarNav.module.scss';

function SideBarNav() {
  return (
    <div className={clsx(styles.sideBarNav)}>
      <button className={clsx(styles.btn)}>
        <FontAwesomeIcon icon={faHouseChimney} className={clsx(styles.icon)}/>
        <span>Dành cho bạn</span>
      </button>
      <button className={clsx(styles.btn)}>
        <FontAwesomeIcon icon={faUserGroup} className={clsx(styles.icon)}/>
        <span>Đang Follow</span>
      </button>
      <button className={clsx(styles.btn)}>
        <FontAwesomeIcon icon={faVideo} className={clsx(styles.icon)}/>
        <span>LIVE</span>
      </button>
    </div>
  )
};

export default SideBarNav;