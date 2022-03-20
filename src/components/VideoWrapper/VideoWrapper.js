import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

import styles from './VideoWrapper.module.scss';

function VideoWrapper({ video }) {
  const [isPlaying, setIsPlaying] = useState("video-1");
  const isInViewPort = useRef();

  useEffect(() => {
    const video = document.querySelector(`.${isPlaying}`);
    const btnPlay = document.querySelector(`.icon-play-video-1`);
    const btnPause = document.querySelector(`.icon-pause-video-1`);
    if (video.played) {
      btnPlay.classList.add("hide");
      btnPause.classList.remove("hide");
    }
    video.play();
  }, []);

  const handleToggle = (id) => {
    const btnPlay = document.querySelector(`.icon-play-video-${id}`);
    const btnPause = document.querySelector(`.icon-pause-video-${id}`);
    const video = document.querySelector(`.video-${id}`);
    setIsPlaying(`video-${id}`);
    if (isPlaying === `video-${id}`) {
      setIsPlaying(null);
      video.pause();
      btnPlay.classList.remove("hide");
      btnPause.classList.add("hide");
    }
    if (isPlaying !== `video-${id}`) {
      setIsPlaying(`video-${id}`);
      video.play();
      btnPlay.classList.add("hide");
      btnPause.classList.remove("hide");
    }
  };

  isInViewPort.current = (ele, index) => {
    const btnPlay = document.querySelector(`.icon-play-video-${index + 1}`);
    const btnPause = document.querySelector(`.icon-pause-video-${index + 1}`);
    const rect = ele.getBoundingClientRect();
    const elemTop = rect.top;
    const isVisible = elemTop + window.innerHeight / 3 < window.innerHeight && elemTop >= 0;
    if (isVisible) {
      setIsPlaying(`video-${index + 1}`);
      ele.querySelector("video").play();
      btnPlay.classList.add("hide");
      btnPause.classList.remove("hide");
    }
    else {
      ele.querySelector("video").pause();
      btnPlay.classList.remove("hide");
      btnPause.classList.add("hide");
    }
  }

  useEffect(() => {
    const ForYouContainer = document.querySelector(`.ForYouContainer`);
    const videos = document.querySelectorAll(`.videoWrapper`);
    ForYouContainer.addEventListener('scroll', () => {
      videos.forEach((video, index) => {
        isInViewPort.current(video, index);
      })
    })
  }, []);

  const handleVolume = (id, value) => {
    const video = document.querySelector(`.video-${id}`);
    video.volume = value / 100;
  }

  return (
    <div className={clsx(styles.videoWrapper, "videoWrapper")}>
      <div className={clsx(styles.video)}>
        <video
          className={clsx(`video-${video.id}`, {
            [styles.horizontal]: video.horizontal,
          })}
          src={video.videoSrc}
          loop={true}
        ></video>

        <div className={clsx(styles.btnToggleContainer, styles.btn)}>
          <button
            className={clsx(styles.btnToggle)}
            onClick={() => { handleToggle(video.id) }}
          >
            <div className={clsx(`icon-play-video-${video.id}`)}>
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <div className={clsx(`icon-pause-video-${video.id}`, "hide")}>
              <FontAwesomeIcon icon={faPause} />
            </div>

          </button>
        </div>

        <div
          className={clsx(styles.btnVolumeContainer, styles.btn)}>
          <button className={clsx(styles.btnVolume)}>
            <input
              onChange={(e) => { handleVolume(video.id, e.target.value) }}
              type="range"
              min={0} max={100}
            />
            <FontAwesomeIcon icon={faVolumeHigh} />
          </button>
        </div>

      </div>

      <div className={clsx(styles.actions)}>
        <div className={clsx(styles.hearts)}>
          <button className={clsx(styles.btn)}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <span>{video.hearts}</span>
        </div>
        <div className={clsx(styles.comments)}>
          <button className={clsx(styles.btn)}>
            <FontAwesomeIcon icon={faComment} />
          </button>
          <span>{video.comments}</span>
        </div>
        <div className={clsx(styles.shares)}>
          <button className={clsx(styles.btn)}>
            <FontAwesomeIcon icon={faShare} />
          </button>
          <span>{video.shares}</span>
        </div>
      </div>
    </div>
  )
};

export default VideoWrapper;