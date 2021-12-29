const CardHeader = (props) => {
	const { children } = props

    return (
			<h3 className="rounded-t-xl bg-secondary text-white h-10 content-center">
				<center>
					{children}
				</center>
			</h3>
	)
}

export default CardHeader
