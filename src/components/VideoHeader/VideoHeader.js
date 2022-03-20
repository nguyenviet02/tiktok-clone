import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './VideoHeader.module.scss';


function VideoHeader({ user, video }) {
  return (
    <div className={clsx(styles.videoHeader)}>

      <div className={clsx(styles.mainHeader)}>
        <div className={clsx(styles.avatar)}>

          <img src={user.avatar} alt="" />

          <div className={clsx(styles.UserCard)}>

            <div className={clsx(styles.UserCardHeader)}>
              <img src={user.avatar} alt={user.name} />
              <button className={clsx(styles.btn)}>Follow</button>
            </div>

            <div className={clsx(styles.UserCardBody)}>

              <div className={clsx(styles.UserCardUserName)}>
                <span>{user.username}</span>
                {user.verified === true ? <FontAwesomeIcon icon={faCircleCheck} className={clsx(styles.UserVerified)} /> : null}
              </div>

              <div className={clsx(styles.UserCardName)}>
                <span>{user.name}</span>
              </div>

            </div>

            <div className={clsx(styles.UserCardStatus)}>
              <p><span>{user.followers}</span> Follower</p>
              <p><span>{user.likes}</span> Thích</p>
            </div>

          </div>

        </div>
        <div className={clsx(styles.info)}>
          <div className={clsx(styles.userName)}>
            <span>{user.username}</span>
            {user.verified === true ? <FontAwesomeIcon icon={faCircleCheck} className={clsx(styles.UserVerified)} /> : null}
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