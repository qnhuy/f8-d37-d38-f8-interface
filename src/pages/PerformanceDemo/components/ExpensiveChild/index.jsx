import styles from './ExpensiveChild.module.scss'
import PropTypes from "prop-types"
import { memo, useMemo } from "react"

const ExpensiveChild = memo(({ items }) => {
    console.log('Render expensive child')

    // Tính toán nặng: tìm item có tên dài nhất
    const expensiveCalculation = useMemo(() => {
        console.log('Calculating longest name...');
        let longest = '';
        items.forEach(item => {
            // Thêm delay giả lập tính toán nặng
            let count = 0
            for (let i = 0; i < 1000; i++) {
                count += 1
                console.log(count)
            }

            if (item.name.length > longest.length) {
                longest = item.name;
            }
        })

        return longest;
    }, [items])

    return <div className={styles.expensiveContainer}>
        <p className={styles.longestName}>Longest name: <span>{expensiveCalculation}</span></p>
        <ul className={styles.list}>
            {items.map((item, index) => <li className={styles.item} key={index}>
                {item.name}
            </li>)}
        </ul>
    </div>
})

ExpensiveChild.propTypes = {
    items: PropTypes.array
}

export default ExpensiveChild