import React from 'react'
import Counter from './Counter'
import ClickCounter from './ClickCounter'
import HoverCounter from '../renderProps/HoverCounter'

const Main = () => {
  return (
    <div>
        <h1>React Render Props To Share Common Data</h1>
        <Counter>
            { (count, incrementCount)=> <ClickCounter count={count} incrementCount={incrementCount} /> }
        </Counter>

        <Counter>
            { (count, incrementCount)=> <HoverCounter count={count} incrementCount={incrementCount} /> }
        </Counter>
    </div>
  )
}

export default Main