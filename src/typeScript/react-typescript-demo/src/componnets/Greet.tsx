import React from 'react'
type GreetProps = {
    name: string
}
const Greet = (props: GreetProps) => {
  return (
    <div>
        <h1>Greet {props.name}</h1>
    </div>
  )
}

export default Greet