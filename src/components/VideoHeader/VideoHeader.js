import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

import styles from './VideoHeader.module.scss';

function VideoHeader({user, video}) {
  return (
    <div className={clsx(styles.videoHeader)}>

      <div className={clsx(styles.mainHeader)}>
        <div className={clsx(styles.avatar)}>
          <img src={user.avatar} alt="" />
        </div>
        <div className={clsx(styles.info)}>
          <div className={clsx(styles.userName)}>
            <span>{user.username}</span>
          </div>
          <div className={clsx(styles.description)}>
            <span>{video.cap}</span>
          </div>
          <div className={clsx(styles.music)}>
            <FontAwesomeIcon icon={faMusic} />
            <span>{video.music}</span>
          </div>
        </div>
      </div>

      <button className={clsx(styles.btn)}>Follow</button>

    </div>
  )
};

export default VideoHeader;