import { NavLink } from 'react-router'
import styles from './AppLogo.module.scss'
import logo from '../../../../images/app-logo.png'

const AppLogo = function () {
  return (
    <NavLink to={'/'} className={styles.container}>
      <img className={styles.img} src={logo} alt='app logo' />
      <p className={styles.slogan}>Học Lập Trình Để Đi Làm</p>
    </NavLink>
  )
}

export default AppLogo
