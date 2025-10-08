import styles from './UserProfile.module.scss'
import withLoading from "../../hoc/withLoading";
import clsx from 'clsx';

const UserProfile = withLoading(() => {
    return <div className={styles.userProfileContainer}>
        <h3 className={styles.title}>User</h3>
        <img className={clsx(styles.userImg, 'avatar-border')} src="https://files.fullstack.edu.vn/f8-prod/public-images/68d85643b8a70.png" alt="" />
        <p className={styles.name}>Name: Quang Huy</p>
        <p className={styles.email}>Email: quanghuy@gmail.com</p>
    </div>
})

export default UserProfile