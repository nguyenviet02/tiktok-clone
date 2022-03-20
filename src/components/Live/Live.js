import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';

import styles from './Live.module.scss';
import { LivePlayer } from '../index';
import { LiveRecommend } from '../index';

function Live() {
  useEffect(() => {
    const mainContainer = document.querySelector(".mainContainer");
    mainContainer.classList.add("active");
  }, []);
  return (
    <div className={clsx(styles.live)}>
      <LivePlayer />
      <LiveRecommend />
    </div>
  )
};

export default Live;