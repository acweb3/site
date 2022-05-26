import * as S from "components/ui/BaseButton/BaseButton.styled";

export const BaseButton = ({ icon, children, ...props }) => {
	return (
		<S.BaseButton {...props}>
			{icon && <S.BaseButtonIcon>{icon}</S.BaseButtonIcon>}
			<S.BaseButtonContent>{children}</S.BaseButtonContent>
		</S.BaseButton>
	);
};
