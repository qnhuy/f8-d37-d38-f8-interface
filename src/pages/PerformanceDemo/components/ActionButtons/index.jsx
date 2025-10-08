// import styles from './ActionButtons.module.scss'
import PropTypes from "prop-types"
import { memo } from "react"

const ActionButtons = memo(({
    onIncrement,
    onReset,
}) => {
    console.log('Render action buttons')

    return <div style={{ display: 'flex', gap: '10px' }}>
        <button className="primary-btn" onClick={onIncrement}>Increment</button>
        <button className="primary-btn" onClick={onReset}>Reset</button>
    </div>
})

ActionButtons.propTypes = {
    onIncrement: PropTypes.func,
    onReset: PropTypes.func,
}

export default ActionButtons