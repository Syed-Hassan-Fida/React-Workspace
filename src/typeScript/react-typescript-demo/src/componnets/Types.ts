export type person = {
    first: string,
    last: string
}

export type HandleChange = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type StyleProps = {
    style: React.CSSProperties
}

export type GreetProps = {
    name: string,
    person: person,
    array: {
        first: string,
        last: string
    }[],
    status: 'loading' | 'success' | 'error',
    children?: React.ReactNode,
    personCount?: number // '?' is for optional use in defining props 
}

export type AuthType = {
    name: string,
    email: string
}