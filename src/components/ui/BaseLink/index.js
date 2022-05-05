import * as S from "components/ui/BaseLink/BaseLink.styled";

export const BaseLink = ({ ...props }) => {
	return (
		<S.BaseLink
			target="_blank"
			rel="noopener noreferrer"
			{...props}
		></S.BaseLink>
	);
};
