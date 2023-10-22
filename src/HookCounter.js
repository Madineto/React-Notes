
import React from 'react'
import { useState } from 'react'

function HookCounter() {
 const [count, setCount] = useState(0)


  return (
    <div>
      <button
        onClick = {()=>setCount(count + 17) }>Count { count}
      </button>
    </div>
  )
}

export default HookCounter