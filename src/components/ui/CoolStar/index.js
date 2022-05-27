import * as S from "components/ui/CoolStar/CoolStar.styled";

export const CoolStar = ({ children, ...props }) => {
	return (
		<S.CoolStar {...props}>
			<S.CoolStarShape />
			<S.CoolStarCopy>{children}</S.CoolStarCopy>
		</S.CoolStar>
	);
};
