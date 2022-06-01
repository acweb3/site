import * as S from "components/ui/CoolButton/CoolButton.styled";

export const CoolButton = ({ children, ...props }) => {
	return (
		<S.CoolButton {...props}>
			<S.CoolButtonContent>{children}</S.CoolButtonContent>
		</S.CoolButton>
	);
};
