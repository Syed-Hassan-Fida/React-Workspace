import React from 'react'

const Title = () => {
    console.log("Title")
    return (
        <div>MainUseCallBack</div>
    )
}

export default React.memo(Title)