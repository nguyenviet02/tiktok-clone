import clsx from 'clsx';

import styles from './Following.module.scss';
import { FollowingCard } from '../index';

import { useDtb } from '../index';

function Following() {
  const [dtbUsers,] = useDtb();
  return (
    <div className={clsx(styles.followingContainer)}>
      {
        dtbUsers.map((user) => (
          <FollowingCard
            key={user.id}
            userId={user.userId}
            avatar={user.avatar}
            name={user.name}
            username={user.username}
            verified={user.verified}
          />
        ))
      }
    </div>
  )
};

export default Following;