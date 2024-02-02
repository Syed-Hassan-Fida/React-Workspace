type ButtonType = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
export const Button = (props: ButtonType) => {
    return (
        <div>
            <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
        </div>
    )
}
