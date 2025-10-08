import styles from './MyCourses.module.scss'
import Tippy from '../../../../../../components/Tippy'
import { useState } from 'react'

const courses = [
    {
        imgUrl: 'https://files.fullstack.edu.vn/f8-prod/courses/31/67f4c93c28d4b.png',
        courseTitle: 'Fullstack Web',
        latest: '2 days ago',
    },
    {
        imgUrl: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
        courseTitle: 'ReactJS',
        latest: '9 days ago',
    },
    {
        imgUrl: 'https://files.fullstack.edu.vn/f8-prod/courses/6.png',
        courseTitle: 'Node & ExpressJS',
        latest: 'Not yet',
    },
]

const MyCourses = function () {
    const [showTippy, setShowTippy] = useState(false)

    return <div className={styles.coursesContainer} onClick={() => setShowTippy(!showTippy)}>
        <button className={styles.toggleBtn} onClick={() => setShowTippy(!showTippy)}>
            <p>My course</p>
            <i className={`${styles.dropdown} fa-solid fa-angle-down`}></i>
        </button>

        {showTippy &&
            <Tippy
                className={styles.tippyWrapper}
                dependClass={styles.coursesContainer}
                onRequestClose={() => setShowTippy(false)}
            >
                <header className={styles.coursesTitle}>
                    <h1>My Courses</h1>
                    <button className={styles.seeAllCourseBtn}>See all</button>
                </header>

                <ul className={styles.courses}>
                    {courses.map((course, index) => <li key={index} className={styles.courseItem}>
                        <img src={course.imgUrl} alt={course.courseTitle} className={styles.courseImg} />
                        <div className={styles.courseDetail}>
                            <h3>{course.courseTitle}</h3>
                            <p>{course.latest}</p>
                        </div>
                    </li>)}
                </ul>
            </Tippy>
        }
    </div>
}

export default MyCourses