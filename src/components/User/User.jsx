import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { userId } = useParams();
    return (
        <div className="mx-auto w-full max-w-7xl">
            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">User : {userId}</h1>
        </div>
    )
}

export default User
