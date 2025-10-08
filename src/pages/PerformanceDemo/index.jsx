import { useCallback, useState } from 'react'

import styles from './PerformanceDemo.module.scss'
import CounterDisplay from './components/CounterDisplay'
import ActionButtons from './components/ActionButtons'
import ExpensiveChild from './components/ExpensiveChild'

const names = [
    'Charlie Brooks',
    'Jordan Donaldson',
    'Natasha Maynard',
    'Landry Roy',
    'Savanna Thompson',
    'Theodore Valdez',
    'Diana Calderon',
    'Oakley Lopez',
    'Gianna Wheeler',
    'Kenneth Young',
    'Zoey Evans',
    'Elias Williamson',
    'Catherine Archer',
    'Ephraim Montgomery',
    'Dayana Newton',
    'Hamza Gilmore'
]

function getRandomName() {
    return names[Math.floor(Math.random() * names.length)]
}

const PerformanceDemo = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState(names[0])
    const [items, setItems] = useState([{ name: 'item1' }])

    const handleIncrement = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    const handleReset = useCallback(() => {
        setCount(0)
        setName(names[0])
        setItems(prevItems => prevItems.length > 1 ? [prevItems[0]] : prevItems)
    }, [])

    function handleChangeName() {
        setName(getRandomName())
    }

    function handleAddItem() {
        setItems([...items, { name: `item${Math.floor(Math.random() * 100000000)}` }])
    }

    return <div className={styles.performContainer}>
        <div className={styles.group}>
            <div className={styles.buttons}>
                <button className='primary-btn' onClick={handleIncrement}>Increment Count</button>
                <button className='primary-btn' onClick={handleChangeName}>Change Name</button>
                <button className='primary-btn' onClick={handleAddItem}>Add Item</button>
            </div>

            <p className={styles.name}>Name: <strong>{name}</strong></p>
            <CounterDisplay count={count} />

            <div className={styles.components}>
                <ActionButtons onIncrement={handleIncrement} onReset={handleReset} />
            </div>
        </div>

        <ExpensiveChild items={items} />
    </div>
}

export default PerformanceDemo