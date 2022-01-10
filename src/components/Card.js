const Card = (props) => {
    const { children, className } = props

    return (
        <section className={className + " m-4 w-80 h-96 rounded-2xl border-2 border-secondary"}>
            {children}
        </section>
	)
}

export default Card
