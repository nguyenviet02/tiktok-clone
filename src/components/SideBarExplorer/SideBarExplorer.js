import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

import { dtbExplorer } from '../index'

import styles from './SideBarExplorer.module.scss';

function SideBarExplorer() {
  return (
    <div className={clsx(styles.sideBarExplorer)}>
      <span className={styles.title}>Khám phá</span>
      <div className={styles.explorerContainer}>
        {dtbExplorer.map(item => (
          <div className={styles.explorerItem} key={item.id}>
            <button className={clsx(styles.btn)}>
              <FontAwesomeIcon
                icon={item.type === "Hashtag" ? faHashtag : faMusic}
                className={clsx(styles.icon)}
              />
              <span className={clsx(styles.content)}>{item.content}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
};

export default SideBarExplorer;