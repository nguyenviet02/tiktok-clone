import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

import styles from './SideBarNav.module.scss';

function SideBarNav() {

  const [active, setActive] = useState("foryou");
  const url = window.location.href;
  useEffect(() => {
    if (url.includes("foryou")) {
      setActive("foryou");
    }
    else if (url.includes("following")) {
      setActive("following");
    }
    else if (url.includes("live")) {
      setActive("live");
    }
  }, [url]);
  return (
    <div className={clsx(styles.sideBarNav)}>

      <Link to="/" className={clsx(styles.link)}>
        <button
          className={clsx(styles.btn, {
            [styles.active]: active === "foryou"
          })}
          onClick={() => setActive("foryou")}
        >
          <FontAwesomeIcon icon={faHouseChimney} className={clsx(styles.icon)} />
          <span>Dành cho bạn</span>
        </button>
      </Link>

      <Link to="/following" className={clsx(styles.link)}>
        <button
          className={clsx(styles.btn, {
            [styles.active]: active === "following"
          })}
          onClick={() => setActive("following")}
        >
          <FontAwesomeIcon icon={faUserGroup} className={clsx(styles.icon)} />
          <span>Đang Follow</span>
        </button>
      </Link>

      <Link to="/live" className={clsx(styles.link)}>
        <button
          className={clsx(styles.btn, {
            [styles.active]: active === "live"
          })}
          onClick={() => setActive("live")}
        >
          <FontAwesomeIcon icon={faVideo} className={clsx(styles.icon)} />
          <span>LIVE</span>
        </button>
      </Link>

    </div>
  )
};

export default SideBarNav;