import styles from './UserMenu.module.scss'
import Tippy from '../../../../../../components/Tippy'
import { useState } from 'react'
import clsx from 'clsx'

const user = {
    name: 'Nguyen Quang Huy',
    avatar: 'https://files.fullstack.edu.vn/f8-prod/public-images/68d85643b8a70.png',
    email: 'quanghuy@gmail.com'
}

const UserMenu = function () {
    const [showUser, setShowUser] = useState(false)

    return <div className={styles.userContainer} onClick={() => setShowUser(!showUser)}>
        <img
            src={user.avatar}
            alt={user.name}
            className={clsx(styles.userImg, 'avatar-border')}
        />

        {showUser &&
            <Tippy
                className={styles.tippyWrapper}
                onRequestClose={() => setShowUser(false)}
                dependClass={styles.userContainer}
            >
                <div className={styles.userDetail}>
                    <img
                        src={user.avatar}
                        alt={user.name}
                    />

                    <div className={styles.userInfo}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                </div>

                <ul className={styles.optionList}>
                    <div className={styles.optionBlock}>
                        <li className={styles.optionItem}>Profile</li>
                    </div>
                    <div className={styles.optionBlock}>
                        <li className={styles.optionItem}>Create a blog</li>
                        <li className={styles.optionItem}>My blogs</li>
                        <li className={styles.optionItem}>Saved blogs</li>
                    </div>
                    <div className={styles.optionBlock}>
                        <li className={styles.optionItem}>Setting</li>
                        <li className={styles.optionItem}>Logout</li>
                    </div>
                </ul>
            </Tippy>}
    </div>
}

export default UserMenu