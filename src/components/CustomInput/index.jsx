import PropTypes from "prop-types"
import { forwardRef, useImperativeHandle, useRef } from "react"

const CustomInput = forwardRef(({
    label,
    placeholder,
    value,
    onChange,
    className,
}, ref) => {
    const innerRef = useRef(null)

    useImperativeHandle(ref, () => {
        return {
            focus() {
                innerRef.current.focus()
            },
            getValue() {
                return value
            },
            blur() {
                innerRef.current.blur()
            }
        }
    })

    return <input
        className={className}
        ref={innerRef}
        value={value}
        label={label}
        placeholder={placeholder}
        onChange={onChange}
    />
})

CustomInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
}

export default CustomInput