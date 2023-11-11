import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData();
    
    // const [data, setData] = useState('')
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ManasKumarLal')
    //         .then(response => response.json())
    //         .then(data => setData(data))
    // })

    return (
        <div className="mx-auto w-full max-w-7xl">
            <div className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 mb-14">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Github Followers : {data.followers}
                        </h2>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src={data.avatar_url} alt="image1" />
                </div>
            </div>
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ManasKumarLal')
    return response.json()
}

export default Github
