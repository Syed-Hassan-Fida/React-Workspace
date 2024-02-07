// type CustomButtonProps = {
//     variant: 'primary' | 'secondary'
// } & React.ComponentProps<'button'>

// omit children
type CustomButtonProps = {
    variant: 'primary' | 'secondary',
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'> 

export const CustomButon = ({variant, children, ...rest}: CustomButtonProps) => {
    return <button className={`variant-with-${variant}`} {...rest}>
        { children }
    </button>
} 