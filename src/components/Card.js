const Card = (props) => {
    const { children } = props

    return (
        <section className={"m-4 w-72 h-min-fit rounded-2xl border-2 border-secondary"}>
            {children}
        </section>
	)
}

export default Card
