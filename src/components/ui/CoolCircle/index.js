import * as S from "components/ui/CoolCircle/CoolCircle.styled";

export const CoolCircle = ({
	className,
	children,
	isSmall,
	isInverted,
	...props
}) => {
	return (
		<S.CoolCircle
			className={className}
			isSmall={isSmall}
			isInverted={isInverted}
			{...props}
		>
			{isInverted && (
				<S.CoolCircleEllipsis
					isSmall={isSmall}
					isInverted={isInverted}
					isShadow
				>
					{children}
				</S.CoolCircleEllipsis>
			)}
			<S.CoolCircleEllipsis
				isSmall={isSmall}
				isInverted={isInverted}
				isVisible
			>
				{children}
			</S.CoolCircleEllipsis>

			<S.CoolCircleEllipsis
				isSmall={isSmall}
				isInverted={isInverted}
				isPlaceholder
			>
				{children}
			</S.CoolCircleEllipsis>
		</S.CoolCircle>
	);
};
