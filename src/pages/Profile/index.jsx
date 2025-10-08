import React from 'react'
import styles from './Profile.module.scss'
import clsx from 'clsx'

const Profile = function () {
    const [imgUrl, setImgUrl] = React.useState(null)

    React.useEffect(() => {
        return () => {
            URL.revokeObjectURL(imgUrl)
        }
    }, [imgUrl])

    const defaultImg = 'https://st4.depositphotos.com/14903220/22197/v/450/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg'

    function handleInputOnChange(e) {
        const imgData = e.target.files[0]
        setImgUrl(URL.createObjectURL(imgData))
    }

    return <div className={styles.profileContainer}>
        <label>
            <input type="file" accept='image/*' hidden onChange={handleInputOnChange} />
            <img
                className={clsx(styles.img, 'avatar-border')}
                src={imgUrl || defaultImg}
            />
        </label>

        <p className={styles.title}>Your avatar</p>
    </div>
}

export default Profile