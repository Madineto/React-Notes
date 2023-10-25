import React, { useEffect } from 'react'
import { useState } from 'react'

const Basic =() => {

  const[message, setMessage] = useState('You again! Am tired.');
  useEffect(() => {
    console.log('Staggering Drunkard')

    setTimeout(() =>{
      setMessage("We Outside!!!")
      }, 1500)
  })
  return <h1>
 { message}

  </h1>
    
  
}

export default Basic