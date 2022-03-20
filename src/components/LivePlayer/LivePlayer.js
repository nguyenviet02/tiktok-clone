import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

import styles from './LivePlayer.module.scss';
function LivePlayer() {

  const btnToggle = useRef();
  const videoRef = useRef();
  const volumeRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    btnToggle.current.addEventListener('click', () => {
      setIsPlaying(!isPlaying);
    });
    videoRef.current.addEventListener('click', () => {
      setIsPlaying(!isPlaying);
    });
    if (isPlaying) {
      videoRef.current.play();
    }
    else {
      videoRef.current.pause();
    }
    return (() => {
      btnToggle.current.removeEventListener('click', () => {
        setIsPlaying(!isPlaying);
      });
      videoRef.current.removeEventListener('click', () => {
        setIsPlaying(!isPlaying);
      });
    })
  }, [isPlaying]);

  useEffect(() => {
    volumeRef.current.addEventListener('change', () => {
      videoRef.current.volume = volumeRef.current.value / 100;
    });

    return () => {
      volumeRef.current.removeEventListener('change', () => {
        videoRef.current.volume = volumeRef.current.value / 100;
      });
    }
  }, [])

  return (
    <div className={clsx(styles.livePlayer)}>
      <div className={clsx(styles.videoLiveContainer)}>

        <div
          className={clsx(styles.videoLive)}
        >

          <div className={clsx(styles.videoLiveHeader, "videoLiveHeader")}>

            <div className={clsx(styles.info)}>
              <div className={clsx(styles.avatar, "avatar")}>
                <img src={require('./cciinnn.jpeg')} alt="" />
              </div>
              <div className={clsx(styles.headerRight)}>
                <span className={clsx(styles.title, "title")}>Đạt Villa vs Vidhia✨ ✍️</span>
                <span className={clsx(styles.username, "username")}>drawkn995</span>
              </div>
            </div>

            <div className={clsx(styles.viewerCount)}>
              <div className={clsx(styles.viewers, "viewers")}>
                <FontAwesomeIcon icon={faUserFriends} />
                <span>1.5k</span>
              </div>
              <button className={clsx(styles.btn)}>LIVE</button>
            </div>

          </div>

          <video
            ref={videoRef}
            src={require('./googlemapfun_video1.mp4')}
            loop={true}
            autoPlay={true}
            className="videoLivePlaying"
          ></video>

          <div
            ref={btnToggle}
            className={clsx(styles.btnToggleContainer, styles.btnMedia)}
          >
            <button
              className={clsx(styles.btnToggle)}
            >
              {isPlaying === true ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
            </button>
          </div>

          <div
            className={clsx(styles.btnVolumeContainer, styles.btnMedia)}>
            <button className={clsx(styles.btnVolume)}>
              <input
                type="range"
                ref={volumeRef}
                min={0} max={100}
              />
              <FontAwesomeIcon icon={faVolumeHigh} />
            </button>
          </div>


        </div>

      </div>
    </div>
  )
};

export default LivePlayer;