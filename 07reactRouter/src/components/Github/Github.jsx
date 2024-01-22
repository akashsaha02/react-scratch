import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/user/hiteshchoudhary')
  //     .then(response => response.json())
  //     .then(data => {
  //       setData(data)
  //     })
  // }, [])
  return (


    <div className='flex justify-center items-center text-center m-4 bg-gray-600 text-white mx-10 rounded-xl p-5  text-3xl'>Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
      </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/user/hiteshchoudhary')
  return response.json()
}