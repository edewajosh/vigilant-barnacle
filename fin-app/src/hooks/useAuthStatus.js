import { useEffect, useState } from "react"

const API_URL = 'http://127.0.0.1:8000/api/token/'

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [token, setToken] = useState([])

    useEffect(() => {
        const loginUser = async () => {
            const req = await fetch(API_URL)
            const data = await req.json()
            if(data.length > 0){
                setLoggedIn(true)
                setToken(data)
            }
        }
        loginUser()
    })

    return {loggedIn, token}
}