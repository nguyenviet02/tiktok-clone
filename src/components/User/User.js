import clsx from 'clsx';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './User.module.scss';

function User({ image, username, name, verified, followers, likes }) {

  return (
    <div className={clsx(styles.User)}>

      <div className={clsx(styles.UserImage)}>
        <img src={image} alt={name} />
      </div>

      <div className={clsx(styles.UserInfo)}>
        <div className={clsx(styles.UserName)}>
          <span>{username}</span>
          <FontAwesomeIcon icon={faCircleCheck} className={clsx(styles.UserVerified, {
            [styles.UserVerifiedActive]: verified,
          })} />
        </div>
        <div className={clsx(styles.Name)}>
          <span>{name}</span>
        </div>
      </div>

      <div className={clsx(styles.UserCard)}>

        <div className={clsx(styles.UserCardHeader)}>
          <img src={image} alt={name} />
          <button className={clsx(styles.btn)}>Follow</button>
        </div>

        <div className={clsx(styles.UserCardBody)}>

          <div className={clsx(styles.UserCardUserName)}>
            <span>{username}</span>
            <FontAwesomeIcon icon={faCircleCheck} className={clsx(styles.UserVerified, {
              [styles.UserVerifiedActive]: verified,
            })} />
          </div>

          <div className={clsx(styles.UserCardName)}>
            <span>{name}</span>
          </div>

        </div>

        <div className={clsx(styles.UserCardStatus)}>
          <p><span>{followers}</span> Follower</p>
          <p><span>{likes}</span> Thích</p>
        </div>

      </div>

    </div>
  )
};

export default User;