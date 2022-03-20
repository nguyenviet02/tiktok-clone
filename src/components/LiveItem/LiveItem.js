import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';

import styles from './LiveItem.module.scss';
function LiveItem({ user, video }) {
  const itemRef = useRef();
  useEffect(() => {
    const videoLive = document.querySelector("video");
    const videoLiveHeader = document.querySelector(".videoLiveHeader");
    const avatar = videoLiveHeader.querySelector(".avatar");
    const title = videoLiveHeader.querySelector(".title");
    const username = videoLiveHeader.querySelector(".username");
    const viewersCount = videoLiveHeader.querySelector(".viewers");
    itemRef.current.addEventListener('click', () => {
      videoLive.src = video;
      avatar.querySelector("img").src = user.avatar;
      title.innerText = user.live.title;
      username.innerText = user.username;
      viewersCount.querySelector("span").innerText = user.live.viewers;
    });

    return (() => {
      itemRef.current.removeEventListener('click', () => {
        videoLive.src = video;
      });
    })
  }, []);

  return (
    <div
      ref={itemRef}
      className={clsx(styles.liveItem)}
    >
      <div className={clsx(styles.liveItemThumbnail)}>
        <img src={user.avatar} alt={user.username} />
        <div className={clsx(styles.liveItemButtons)}>
          <button className={clsx(styles.viewers)}>{user.live.viewers} viewers</button>
          <button className={clsx(styles.btn)}>LIVE</button>
        </div>
      </div>
      <div className={clsx(styles.liveItemInfo)}>
        <div className={clsx(styles.avatar)}>
          <img src={user.avatar} alt={user.username} />
        </div>
        <div className={clsx(styles.info)}>
          <span className={clsx(styles.title)}>
            {user.live.title}
          </span>
          <span className={clsx(styles.author)}>
            {user.username}
          </span>
        </div>
      </div>
    </div>
  )
};

export default LiveItem;