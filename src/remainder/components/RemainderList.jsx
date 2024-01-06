import React from 'react'
import Lists from './Lists'

const RemainderList = () => {
  return (
    <div className='d-flex flex-wrap flex-column align-items-center p-2 justify-content-center remainder pt-4 pb-4'>
        <h1>Remainder List</h1>
        <Lists/>
    </div>
  )
}

export default RemainderList