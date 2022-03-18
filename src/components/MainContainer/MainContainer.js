import clsx from 'clsx';
import { Routes, Route, Navigate } from 'react-router-dom';

import styles from './MainContainer.module.scss';
import { ForYou } from '../index';
import { Following } from '../index';

function MainContainer() {
  return (
    <div className={clsx(styles.mainContainer, "mainContainer")}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/foryou" />} />
        <Route path="/foryou" element={<ForYou />} />
        <Route path="/following" element={<Following />} />
      </Routes>
    </div>
  )
};

export default MainContainer;