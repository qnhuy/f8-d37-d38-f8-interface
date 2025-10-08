import { useEffect, useState } from "react";

export default function useApi(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    function refetch() {
        setLoading(true)

        fetch(url)
            .then(response => {
                setLoading(false)
                return response.json()
            })
            .then(data => setData(data))
            .catch(error => setError(error))
    }

    useEffect(() => {
        refetch()
    }, [url])

    return { data, loading, error, refetch }
}

