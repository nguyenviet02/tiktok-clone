import clsx from 'clsx';
import { useState, useEffect } from 'react';

import styles from './FollowingCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { dtbVideos } from '../index';

function FollowingCard({ userId, avatar, name, username, verified }) {
  const findVideo = (id) => {
    const videoSrc = dtbVideos.filter((video) => video.userId === id)[0].videoSrc;
    return videoSrc;
  };
  const videoSrc = findVideo(userId);

  const [isPlaying, setIsPlaying] = useState("video-1");

  useEffect(() => {
    const followingCards = document.querySelectorAll(".followingCard");
    followingCards.forEach((item, index) => {
      item.addEventListener("mouseover", () => {
        setIsPlaying(`video-${index + 1}`);
      })
    });
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      if (video.classList.contains(isPlaying)) {
        video.play();
      }
      else {
        video.pause();
      }
    });
  }, [isPlaying]);

  return (
    <div
      className={clsx(styles.followingCard, "followingCard")}
    >
      <video
        src={videoSrc}
        className={clsx(styles.followingCardVideo, `video-${userId}`)}
        loop={true}
      ></video>
      <div className={clsx(styles.infoContainer)}>
        <div className={clsx(styles.avatar)}>
          <img src={avatar}></img>
        </div>
        <div className={clsx(styles.name)}>
          <span>{name}</span>
          {verified === true ? <FontAwesomeIcon icon={faCircleCheck} className={clsx(styles.verified)} /> : null}
        </div>
        <div className={clsx(styles.username)}>
          <span>{username}</span>
        </div>
        <button className={clsx(styles.btn)}>
          Follow
        </button>
      </div>
    </div>
  )
};

export default FollowingCard;