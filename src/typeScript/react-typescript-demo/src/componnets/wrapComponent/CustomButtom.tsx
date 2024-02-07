type CustomButtonProps = {
    variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

export const CustomButon = ({variant, children, ...rest}: CustomButtonProps) => {
    return <button className={`variant-with-${variant}`} {...rest}>
        { children }
    </button>
} 