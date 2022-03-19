import clsx from 'clsx';

import styles from './SideBar.module.scss';
import { SideBarNav } from '../index';
import { SideBarLogin } from '../index';
import { SideBarUsers } from '../index';
import { SideBarExplorer } from '../index';
import { SideBarFooter } from '../index';

function SideBar() {
  console.log("render");
  return (
    <div className={clsx(styles.sideBar, "sideBar")}>
      <SideBarNav />
      <SideBarLogin />
      <SideBarUsers />
      <SideBarExplorer />
      <SideBarFooter />
    </div>
  )
};

export default SideBar;