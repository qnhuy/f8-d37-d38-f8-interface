import { useState } from "react"

// eslint-disable-next-line no-unused-vars
function withLoading(Component) {
    const WrappedComponent = (props) => {
        const [isLoading, setIsLoading] = useState(true)
        setTimeout(() => setIsLoading(false), 1000)

        return (
            isLoading ? <span className='loader'></span> : <Component {...props} />
        )
    }

    return WrappedComponent
}

export default withLoading