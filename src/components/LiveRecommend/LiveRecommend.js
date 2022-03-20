import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import styles from './LiveRecommend.module.scss';

import { LiveItem } from '../index';
import { dtbUsers } from '../index';
import { dtbVideos } from '../index';

function LiveRecommend() {
  const userLive = dtbUsers.filter(user => user.isLive === true);
  const getVideoLive = (userId) => {
    const videoLive = dtbVideos.filter(video => video.userId === userId);
    return videoLive[0].videoSrc;
  }
  return (
    <div className={clsx(styles.liveRecommend)}>
      <span className={clsx(styles.title)}>Video trực tiếp được đề xuất</span>
      <div className={clsx(styles.liveRecommendContainer)}>
        {
          userLive.map((user) => (
            <LiveItem key={user.id} user={user} video={getVideoLive(user.userId)} />
          ))
        }
      </div>
    </div>
  )
};

export default LiveRecommend;