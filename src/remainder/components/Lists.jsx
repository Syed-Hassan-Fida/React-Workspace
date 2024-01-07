import React from 'react'

const Lists = () => {
    return (
        <div>
            <div className='priority-high m-3 lists'>
                <div>Task/Event: ABC
                    <span>Desc: Test</span>
                    <span>Scheduled For: 2-12-2023</span>
                    <span>Priority: Hight</span>
                </div>
                <div>
                    <span class="material-icons" style={{ color: 'gray', marginRight: '5px' }}>
                        visibility
                    </span>
                    <span class="material-icons" style={{ color: 'green', marginRight: '5px' }}>
                        edit
                    </span>
                    <span class="material-icons" style={{ color: 'red' }}>
                        delete
                    </span>
                </div>
            </div>
            <div className='priority-medium m-3 lists'>
                <lists>Task/Event: ABC
                    <span>Desc: Test</span>
                    <span>Scheduled For: 2-12-2023</span>
                    <span>Priority: Medium</span>
                </lists>
                <div>
                    <span class="material-icons" style={{ color: 'gray', marginRight: '5px' }}>
                        visibility
                    </span>
                    <span class="material-icons" style={{ color: 'green', marginRight: '5px' }}>
                        edit
                    </span>
                    <span class="material-icons" style={{ color: 'red' }}>
                        delete
                    </span>
                </div>
            </div>
            <div className='priority-low m-3 lists'>
                <div>Task/Event: ABC
                    <span>Desc: Test</span>
                    <span>Scheduled For: 2-12-2023</span>
                    <span>Priority: Low</span>
                </div>
                <div>
                    <span class="material-icons" style={{ color: 'gray', marginRight: '5px' }}>
                        visibility
                    </span>
                    <span class="material-icons" style={{ color: 'green', marginRight: '5px' }}>
                        edit
                    </span>
                    <span class="material-icons" style={{ color: 'red' }}>
                        delete
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Lists