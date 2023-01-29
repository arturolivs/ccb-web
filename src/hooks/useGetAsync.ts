import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

const useGetAsync = <T>(url: string, params?: AxiosRequestConfig) => {
    const [data, setData] = useState<T>()
    const [error, setError] = useState<string>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        ;(async () => {
            try {
                const response = await axios.get<T>(url, params)
                setData(response.data)
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    setError(`Error with Message: ${err.message}`)
                } else {
                    setError(err as string)
                }
                setLoading(false)
            } finally {
                setLoading(false)
            }
        })()
    }, [url, params])

    return [data, error, loading] as const
}

export default useGetAsync
