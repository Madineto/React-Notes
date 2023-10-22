import React from 'react'
import { useState } from 'react'

const Basic =() => {

  const[message, setMessage] = useState('You again! Am tired.');
  return <h1>
 { message}

  </h1>
    
  
}

export default Basic