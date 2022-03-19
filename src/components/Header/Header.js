import clsx from 'clsx';

import styles from './Header.module.scss';
import { SearchBar } from '../index';
import { HeaderRight } from '../index';

function Header() {
  return (
    <div className={clsx(styles.header, "header")}>
      <div className={styles.headerLogo}>
        <img src={require('./images/logo.png')} alt="" />
      </div>
      <SearchBar />
      <HeaderRight />
    </div>
  )
};

export default Header;