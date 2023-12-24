import React from 'react'

function MemoComp({ name }) {
    console.log("memo comp")
    return (
        <div>MemoComp {name}</div>
    )
}

export default React.memo(MemoComp)