import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function useAxiosGet(url) {
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })
//The hook checks the request and returns RESPONSE received from the API.
//Second, a variiable to monitor for any change to rerun the function code
    useEffect(() => {
//Initial request sent
        setRequest({loading: true, data: null, error: false})
        axios.get(url)
//when response is successfully fetched
            .then(Response => {
                setRequest({
                    loading: false, 
                    data: Response.data, 
                    error: false})
            })
//if error is encountered from the API
//report the Error response from API as Error.data
            .catch(Error => {
                setRequest({
                    loading: false, 
                    data: null, 
                    error: true})
            })
    }, [url])

    return request
}