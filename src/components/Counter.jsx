import React from 'react'
import '../stylesheets/Counter.css'

const Counter = ({ numClics }) => {
  return (
    <div className='counter'>
        {numClics}
        </div>
  )
}

export default Counter