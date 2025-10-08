// import styles from './CounterDisplay.module.scss'
import PropTypes from "prop-types"
import { memo } from "react"

const CounterDisplay = memo(({
    count
}) => {
    console.log('Render counter display')

    return <div>Value:
        <p style={{
            display: 'inline',
            fontSize: '2.2rem',
            fontWeight: '500',
            marginLeft: '12px'
        }}>
            {count}
        </p>
    </div>
})

CounterDisplay.propTypes = {
    count: PropTypes.number,
}

export default CounterDisplay