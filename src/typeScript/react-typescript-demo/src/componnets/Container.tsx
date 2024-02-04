import { StyleProps } from './Types'

export default function Container(props: StyleProps) {
    return (
        <div style={props.style}>
            <h1>Container</h1>
        </div>
    )
}
