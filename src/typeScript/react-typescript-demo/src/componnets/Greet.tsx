import React from "react"
import { GreetProps } from './Types'

const Greet = (props: GreetProps) => {
    const { personCount = 0 } = props
    let message
    if (props.status === 'loading') {
        message = 'laoding....'
    } else if (props.status === 'success') {
        message = 'success....'
    } else if (props.status === 'error') {
        message = 'error....'
    }
    return (
        <div>
            <h1>Greet {props.name}</h1>
            <h1>Status {message}</h1>
            <h1>Person Count {personCount}</h1>
            <h1>Hello {props.person.first} {props.person.last}</h1>
            {
                props.array.map(name => {
                    return (
                        <h2>{name.first}--{name.last}</h2>
                    )
                })
            }
            {props.children}
        </div>
    )
}

export default Greet