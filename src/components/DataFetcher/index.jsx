import { useEffect, useState } from "react"

const DataFetcher = function ({ url, children }) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(error => setError(error))
    }, [])

    return children({ data, loading, error })
}

export default DataFetcher