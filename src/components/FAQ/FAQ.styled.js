import { BaseButton } from "components/ui/BaseButton";
import styled, { css } from "styled-components";

export const FAQAnswer = styled.div`
	margin-top: 32px;
	max-width: 640px;
`;

export const FAQQuestionExpand = styled(BaseButton)`
	color: ${(props) => props.theme.colors.white[0]};
	background-color: ${(props) => props.theme.colors.black[0]};
	border: 1px solid;

	min-width: 48px;
	margin-left: 16px;

	&:active,
	&:focus,
	&:hover {
		color: ${(props) => props.theme.colors.black[0]};
		background-color: ${(props) => props.theme.colors.white[0]};
	}

	${(props) =>
		props.isActive &&
		css`
			color: ${(props) => props.theme.colors.black[0]};
			background-color: ${(props) => props.theme.colors.white[0]};
		`}

	${(props) => props.theme.breakpoints.extraSmall`
		margin-left: 0;
	`}
`;

export const FAQQuestionContent = styled.div`
	max-width: 640px;
`;

export const FAQQuestion = styled.div`
	cursor: pointer;
	user-select: none;

	font-family: ${(props) => props.theme.fontFamily.mono};
	font-size: ${(props) => props.theme.fontSize.body};

	display: flex;
	align-items: center;
	justify-content: space-between;

	&:hover {
		& ${FAQQuestionExpand} {
			color: ${(props) => props.theme.colors.black[0]};
			background-color: ${(props) => props.theme.colors.white[0]};
		}
	}

	${(props) => props.theme.breakpoints.extraSmall`
		font-size: ${(props) => props.theme.fontSize.h4};
	`}
`;

export const FAQPoint = styled.div`
	padding: 32px 0 48px;
	border-bottom: 1px solid;

	&:first-of-type {
		border-top: 1px solid;
	}

	${(props) => props.theme.breakpoints.extraSmall`
		padding: 48px 32px 48px 0;
	`}
`;

export const FAQ = styled.div`
	color: ${(props) => props.theme.colors.white[0]};
	background-color: ${(props) => props.theme.colors.black[0]};
	padding: 0 32px 48px;

	${(props) => props.theme.breakpoints.extraSmall`
		padding: 40px 128px 48px;
	`}
`;
