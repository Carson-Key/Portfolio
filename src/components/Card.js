const Card = (props) => {
    const { children, className } = props

    return (
        <section className={"m-2 w-80 h-96 rounded-2xl border-2 border-secondary " + className}>
            {children}
        </section>
	)
}

export default Card
