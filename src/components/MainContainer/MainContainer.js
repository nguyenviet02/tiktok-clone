import clsx from 'clsx';

import styles from './MainContainer.module.scss';
import { ForYou } from '../index';

function MainContainer() {
  return (
    <div className={clsx(styles.mainContainer, "mainContainer")}>
      <ForYou />
    </div>
  )
};

export default MainContainer;