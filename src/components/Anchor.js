const Anchor = (props) => {
    const { disable, children, className, href } = props

    return (
        <a className={
            disable ? " " + className : "text-primary underline " + className
        } href={href}>
            {children}
        </a>
	)
}

export default Anchor
