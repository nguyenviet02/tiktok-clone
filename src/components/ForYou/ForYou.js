import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';

import styles from './ForYou.module.scss';
import { ItemWrapper } from '../index';
import { dtbVideos } from '../index';

function ForYou() {
  const ForYouContainer = useRef();
  const total = useRef(5);
  const [newDtbVideos, setNewDtbVideos] = useState(dtbVideos.slice(0, total.current));
  const handleScroll = () => {
    if (ForYouContainer.current.scrollHeight - ForYouContainer.current.scrollTop < ForYouContainer.current.scrollHeight / 3) {
      if (total.current < dtbVideos.length) {
        total.current += 5;
        setNewDtbVideos(dtbVideos.slice(0, total.current));
      }
    }
  }
  useEffect(() => {
    ForYouContainer.current.addEventListener('scroll', handleScroll);
    return () => {
      ForYouContainer.current.removeEventListener('scroll', handleScroll);
    }
  }, [newDtbVideos])

  return (
    <div className={clsx(styles.ForYouContainer, "ForYouContainer")} ref={ForYouContainer}>
      {
        newDtbVideos.map(video => (
          <ItemWrapper key={video.id} id={video.id} />
        ))
      }
    </div>
  )
};

export default ForYou;