import React from 'react'

const Lists = () => {
  return (
    <div>
        <div className='priority-high m-3'>
            <p>Task/Event: ABC <span>Desc: Test</span><span>Scheduled For: 2-12-2023</span> <span>Priority: Hight</span></p>
        </div>
        <div className='priority-medium m-3'>
            <p>Task/Event: ABC <span>Desc: Test</span><span>Scheduled For: 2-12-2023</span> <span>Priority: Medium</span></p>
        </div>
        <div className='priority-low m-3'>
            <p>Task/Event: ABC <span>Desc: Test</span><span>Scheduled For: 2-12-2023</span> <span>Priority: Low</span></p>
        </div>
    </div>
  )
}

export default Lists