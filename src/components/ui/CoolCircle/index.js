import * as S from "components/ui/CoolCircle/CoolCircle.styled";

export const CoolCircle = ({ className, children }) => {
	return (
		<S.CoolCircle className={className}>
			<S.CoolCircleEllipsis isVisible>{children}</S.CoolCircleEllipsis>
			<S.CoolCircleEllipsis>{children}</S.CoolCircleEllipsis>
		</S.CoolCircle>
	);
};
