import { Lists } from './Lists'
import { Button } from './Button'
import Container from './Container'
import { Counter } from './Counter'
import Input from './Input'
import User from './User'
import { UserContextProvider } from './UserContext'

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
            }} />
            <Container style={{ border: "1px solid black", padding: "2px", margin: "5px" }}></Container>

            {/* with context api */}
            <UserContextProvider>
                <User />
            </UserContextProvider>
            <Counter />

            <Lists items={[{
                id: 1,
                name: "react"
            },
            {
                id: 2,
                name: "react"
            }]} handleClick={(items) => console.log("items is ", items)} />
        </div>
    )
}

export default Main