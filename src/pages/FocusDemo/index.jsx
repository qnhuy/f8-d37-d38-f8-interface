import { useRef, useState } from "react"
import CustomInput from "../../components/CustomInput"
import styles from './FocusDemo.module.scss'

const FocusDemo = () => {
    const input1Ref = useRef(null)
    const input2Ref = useRef(null)
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [savedValue, setSavedValue] = useState(null)
    const [showValue, setShowValue] = useState(false)

    let counter = useRef(0)
    counter.current += 1
    console.log(counter.current)

    return <div className={styles.focusDemoContainer}>
        <div className={styles.inputValue}>
            <div className={styles.inputs}>
                <CustomInput
                    className={styles.input}
                    ref={input1Ref}
                    value={value1}
                    onChange={e => setValue1(e.target.value)}
                    placeholder='Enter value 1'
                    lable='value'
                />

                <CustomInput
                    className={styles.input}
                    ref={input2Ref}
                    value={value2}
                    onChange={e => setValue2(e.target.value)}
                    placeholder='Enter value 2'
                    lable='value'
                />
            </div>

            {(showValue && savedValue) &&
                <div className={styles.values}>
                    <p>Value 1: {savedValue.value1}</p>
                    <p>Value 2: {savedValue.value2}</p>
                </div>
            }
        </div>

        <div className={styles.buttons}>
            <button className="primary-btn" onClick={() => input1Ref.current.focus()}>Focus Input 1</button>
            <button className="primary-btn" onClick={() => input2Ref.current.focus()}>Focus Input 2</button>

            <button className="primary-btn" onClick={() => {
                setValue1('')
                setValue2('')
            }}>
                Clear Both
            </button>

            <button className="primary-btn" onClick={() => {
                setSavedValue({
                    value1: input1Ref.current.getValue(),
                    value2: input2Ref.current.getValue()
                })
                setShowValue(true)
            }}>
                Get Values
            </button>

            <button className="primary-btn" onClick={() => setShowValue(false)}>
                Hide Values
            </button>
        </div>
    </div>
}

export default FocusDemo