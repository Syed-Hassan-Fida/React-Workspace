import React from 'react'
import UpdatedFunction from './WithCounter'

const HoverCounter = ({count, incrementCount}) => {
  return (
    <div onMouseOver={incrementCount}>HoverCounter {count}</div>
  )
}

export default UpdatedFunction(HoverCounter)