import * as S from "components/ui/CoolCircle/CoolCircle.styled";

export const CoolCircle = ({
	className,
	children,
	isSmall,
	isInverted,
	isScript,
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
					isScript={isScript}
					isShadow
				>
					{children}
				</S.CoolCircleEllipsis>
			)}
			<S.CoolCircleEllipsis
				isSmall={isSmall}
				isInverted={isInverted}
				isScript={isScript}
				isVisible
			>
				{children}
			</S.CoolCircleEllipsis>

			<S.CoolCircleEllipsis
				isSmall={isSmall}
				isInverted={isInverted}
				isScript={isScript}
				isPlaceholder
			>
				{children}
			</S.CoolCircleEllipsis>
		</S.CoolCircle>
	);
};
