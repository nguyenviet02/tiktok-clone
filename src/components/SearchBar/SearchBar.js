import clsx from 'clsx';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './SearchBar.module.scss';


function SearchBar() {
  const [input, setInput] = useState("");
  return (
    <div className={clsx(styles.searchBar)}>
      <div className={clsx(styles.inputContainer)}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={clsx(styles.input)}
          type="text"
          placeholder="Tìm kiếm tài khoản và video"
        />
        <FontAwesomeIcon icon={faTimesCircle} className={clsx(styles.iconTimesCircle, {
          [styles.iconTimesCircleActive]: input,
        })} />
      </div>
      <div className={clsx(styles.searchBtn)}>
        <FontAwesomeIcon icon={faSearch} className={clsx(styles.iconSearch)} />
      </div>
    </div>
  )
};

export default SearchBar;