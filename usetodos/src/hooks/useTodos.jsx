
import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../api/axiosInstance'

function List() {
    const [todos, settodos] = useState([])
        const [loading, setloading] = useState(true)
        const [error, seterror] = useState({})
    
    
        useEffect(() => {
            
            axiosInstance.get("products")
            .then(res => {
                settodos(res.data)
                setloading(false)
            })
            .catch(err => {
                seterror(err)
                setloading(false)
            })
    
        }, [])
    return {todos, loading, error}
}

export default List