import { NavLink } from "react-router"

import styles from './Sidebar.module.scss'

const Sidebar = function () {
    function handleNavClass(isActive) {
        return `${styles.navItem} ${isActive ? styles.selected : ''}`
    }

    const navs = [
        { to: '', content: 'Home', icons: 'fa-solid fa-home' },
        { to: 'scroll-demo', content: 'Scroll top', icons: 'fa-solid fa-circle-arrow-up' },
        { to: 'profile', content: 'Profile', icons: 'fa-solid fa-circle-user' },
        { to: 'modal-demo', content: 'Modal', icons: 'fa-solid fa-message' },
        { to: 'performance-demo', content: 'Performance Demo', icons: 'fa-solid fa-bolt-lightning' },
        { to: 'focus-demo', content: 'Focus Demo', icons: 'fa-solid fa-arrows-to-eye' },
        { to: 'hoc-demo', content: 'HOC Demo', icons: 'fa-solid fa-expand' },
        { to: 'render-props-demo', content: 'Render Props Demo', icons: 'fa-solid fa-users-viewfinder' },
        { to: 'custom-hooks-demo', content: 'Custom Hooks Demo', icons: 'fa-solid fa-bookmark' },
    ]

    return (
        <div className={styles.sidebarContainer}>
            {navs.map((nav, index) =>
                <NavLink key={index} to={nav.to} className={({ isActive }) => handleNavClass(isActive)}>
                    <i className={`${styles.icon} ${nav.icons}`}></i>
                    <p>{nav.content}</p>
                </NavLink>
            )}
        </div>
    )
}

export default Sidebar