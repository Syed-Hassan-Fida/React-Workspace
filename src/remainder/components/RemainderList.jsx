import React from 'react'
import Lists from './Lists'

const RemainderList = () => {
  return (
    <div className='d-flex flex-wrap flex-column align-items-left p-2 justify-content-left remainder pt-4 pb-4'>
        <h1 className='m-3'>Upcomming Reminder's</h1>
        <Lists/>
    </div>
  )
}

export default RemainderList