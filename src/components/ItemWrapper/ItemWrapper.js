import clsx from 'clsx';

import styles from './ItemWrapper.module.scss';
import { VideoHeader } from '../index';
import { VideoWrapper } from '../index';
import { useDtb } from '../index';

function ItemWrapper({ id }) {
  const [dtbUsers, dtbVideos] = useDtb();
  function getUserById(id) {
    const video = dtbVideos.filter(video => video.id === id)[0];
    const user = dtbUsers.find(user => user.userId === video.userId);
    return {
      video,
      user,
    }
  }
  const item = getUserById(id);
  return (
    <div className={clsx(styles.itemWrapper)}>
      <VideoHeader user={item.user} video={item.video} />
      <VideoWrapper video={item.video} />
    </div>
  )
};

export default ItemWrapper;