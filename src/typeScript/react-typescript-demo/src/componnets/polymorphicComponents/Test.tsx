type CustomTestType<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg',
    color?: 'primary' | 'secondary',
    children: React.ReactNode,
    as?: E
}

type TestType<E extends React.ElementType> =
    CustomTestType<E> & Omit<React.ComponentProps<E>, keyof CustomTestType<E>>

export const Test = <E extends React.ElementType = 'div'>({ size, color, children, as }: TestType<E>) => {
    const Component = as || 'div'
    return <Component className={`class-with-${size}-${color}`}>
        {children}
    </Component>
}