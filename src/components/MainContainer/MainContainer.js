import clsx from 'clsx';
import { Routes, Route, Navigate } from 'react-router-dom';

import styles from './MainContainer.module.scss';
import { ForYou } from '../index';
import { Following } from '../index';

function MainContainer() {
  return (
    <div className={clsx(styles.mainContainer, "mainContainer")}>
      <Routes>
        <Route path="/tiktok-clone" element={<Navigate replace to="/tiktok-clone/foryou" />} />
        <Route path="/tiktok-clone/foryou" element={<ForYou />} />
        <Route path="/following" element={<Following />} />
      </Routes>
    </div>
  )
};

export default MainContainer;