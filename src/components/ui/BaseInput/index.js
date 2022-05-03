import * as S from "components/ui/BaseInput/BaseInput.styled";

export const BaseInput = React.forwardRef(({ ...props }, ref) => {
	return <S.BaseInput {...props} ref={ref}></S.BaseInput>;
});
