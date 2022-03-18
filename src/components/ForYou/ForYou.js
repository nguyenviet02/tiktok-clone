import clsx from 'clsx';

import styles from './ForYou.module.scss';
import { ItemWrapper } from '../index';
import { dtbVideos } from '../index';

function ForYou() {
  return (
    <div className={clsx(styles.ForYouContainer, "ForYouContainer")}>
      {
        dtbVideos.map(video => (
          <ItemWrapper key={video.id} id={video.id} />
        ))
      }
    </div>
  )
};

export default ForYou;