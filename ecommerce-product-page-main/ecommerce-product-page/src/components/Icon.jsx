export const Icon = ({height, width, icon}) => {
	return (
		<svg height={height} width={width}>
			<use xlinkHref={`/svg/icon-${icon}.svg#icon-${icon}`}></use>
		</svg>
	)
}