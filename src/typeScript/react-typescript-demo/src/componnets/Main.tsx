import { Button } from './Button'
import Input from './Input'

const Main = () => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
        console.log("clicked", event, id)
    }
    return (
        <div>
            <Button handleClick={handleClick} />
            {/* <Button handleClick={(event, id)=>{
                console.log("clicked 2 ", event, id)
            }} /> */}
            <Input value='' handleChange={(event) => {
                console.log("detected a change")
            }}/>

        </div>
    )
}

export default Main