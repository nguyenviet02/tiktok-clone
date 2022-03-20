import clsx from 'clsx';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';

import styles from './MainContainer.module.scss';
import { ForYou } from '../index';
import { Following } from '../index';
import { Live } from '../index';

function MainContainer() {
  return (
    <div className={clsx(styles.mainContainer, "mainContainer")}>
      <Routes>
        <Route exact path="/foryou" element={<ForYou />} />
        <Route exact path="/following" element={<Following />} />
        <Route exact path="/live" element={<Live />} />
      </Routes>
    </div>
  )
};

export default MainContainer;