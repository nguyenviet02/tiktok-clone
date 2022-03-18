import clsx from 'clsx';

import styles from './MainContainer.module.scss';
import { ItemWrapper } from '../index';
import { dtbVideos } from '../index';
function MainContainer() {
  return (
    <div className={clsx(styles.mainContainer, "mainContainer")}>
      {
        dtbVideos.map(video => (
          <ItemWrapper key={video.id} id={video.id} />
        ))
      }
    </div>
  )
};

export default MainContainer;