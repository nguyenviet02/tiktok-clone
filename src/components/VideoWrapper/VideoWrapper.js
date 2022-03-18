import { useState, useEffect } from 'react';
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
  const [isPlaying, setIsPlaying] = useState();

  const handleToggle = (id) => {
    setIsPlaying(`video-${id}`);
    if (isPlaying === `video-${id}`) {
      setIsPlaying(null);
    }
    if (isPlaying !== `video-${id}`) {
      setIsPlaying(`video-${id}`);
    }
  };

  const isInViewPort = (ele) => {
    const rect = ele.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    const isVisible = elemTop + window.innerHeight / 4 < window.innerHeight && elemTop >= 60;
    return isVisible;
  }

  useEffect(() => {
    console.log(window.innerHeight);
    const mainContainer = document.querySelector(`.mainContainer`);
    const videos = document.querySelectorAll(`.videoWrapper`);
    const btnPlay = document.querySelector(`.icon-play-video-${video.id + 1}`);
    const btnPause = document.querySelector(`.icon-pause-video-${video.id + 1}`);
    mainContainer.addEventListener('scroll', () => {
      videos.forEach(video => {
        if (isInViewPort(video)) {
          video.querySelector("video").play();
          btnPlay.classList.remove('hide');
          btnPause.classList.add('hide');
        }
        else {
          video.querySelector("video").pause();
          btnPlay.classList.add('hide');
          btnPause.classList.remove('hide');
        }
      })
    })
  }, [])

  useEffect(() => {
    const videos = document.querySelectorAll('video');
    console.log(isPlaying);
    videos.forEach((videoItem, index) => {
      const btnPlay = document.querySelector(`.icon-play-video-${index + 1}`);
      const btnPause = document.querySelector(`.icon-pause-video-${index + 1}`);
      if (videoItem.classList.contains(isPlaying)) {
        if (videoItem.paused) {
          videoItem.play();
          btnPlay.classList.add('hide');
          btnPause.classList.remove('hide');
        }
        else {
          videoItem.pause();
          btnPlay.classList.add('hide');
          btnPause.classList.remove('hide');
        }
      }
      else {
        videoItem.classList.remove('playing');
        videoItem.pause();
        btnPlay.classList.remove('hide');
        btnPause.classList.add('hide');
      }

    });
  }, [isPlaying]);


  const handleVolume = (id, value) => {
    const video = document.querySelector(`.video-${id}`);
    video.volume = value / 100;
  }

  return (
    <div className={clsx(styles.videoWrapper, "videoWrapper")}>
      <div className={clsx(styles.video)}>
        <video
          className={clsx(`video-${video.id}`, isPlaying === `video-${video.id}` ? "playing" : "", {
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
            <div className={clsx(`icon-play-video-${video.id}`, "hide")}>
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <div className={clsx(`icon-pause-video-${video.id}`)}>
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