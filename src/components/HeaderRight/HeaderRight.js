import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

import styles from './HeaderRight.module.scss';

function HeaderRight() {
  const [menu, setMenu] = useState(false);
  const iconRef = useRef();
  useEffect(() => {
    iconRef.current.addEventListener('click', () => {
      setMenu(!menu);
    });
  }, [menu]);
  return (
    <div className={clsx(styles.headerRight)}>
      <ul>
        <li>
          <a href="#" className={clsx(styles.uploadBtn)}>Tải lên</a>
        </li>
        <li>
          <button className={clsx(styles.signInBtn)}>Đăng nhập</button>
        </li>
        <li ref={iconRef}>
          <FontAwesomeIcon
            icon={faEllipsisV} className={clsx(styles.iconEllipsisV)}
          />
        </li>
      </ul>
      <div className={clsx(styles.menu, {
        [styles.menuActive]: menu,
      })}>
        <button>
          <FontAwesomeIcon icon={faLanguage} className={clsx(styles.iconLanguage, styles.icon)} />
          <span>Tiếng Việt</span>
        </button>
        <button>
          <FontAwesomeIcon icon={faQuestionCircle} className={clsx(styles.iconQuestionCircle, styles.icon)} />
          <span>Phản hồi và trợ giúp</span>
        </button>
        <button>
          <FontAwesomeIcon icon={faKeyboard} className={clsx(styles.iconQuestionCircle, styles.icon)} />
          <span>Phím tắt trên bàn phím</span>
        </button>
      </div>
    </div>
  )
};

export default HeaderRight;