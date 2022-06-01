import { BaseButton } from "components/ui/BaseButton";
import { BaseInput } from "components/ui/BaseInput";
import { BaseTextArea } from "components/ui/BaseTextArea";
import { transparentize } from "polished";
import styled, { css } from "styled-components";

export const SignupSubmit = styled(BaseButton)`
	color: ${(props) => props.theme.colors.white[0]};
	border-color: ${(props) => props.theme.colors.white[0]};
	background: ${(props) => props.theme.colors.black[0]};
	margin: 24px 0 0 auto;
	min-width: 80px;

	&:active,
	&:focus,
	&:hover {
		color: ${(props) => props.theme.colors.black[0]};
		background: ${(props) => props.theme.colors.white[0]};
	}
`;

export const SignupInputLabel = styled.label`
	display: flex;
	align-items: center;

	margin-top: 16px;

	& > svg {
		margin-left: 8px;
	}

	&:first-of-type {
		margin-top: 0px;
	}
`;

const inputCss = css`
	width: 100%;
	margin-top: 8px;

	color: ${(props) => props.theme.colors.white[0]};
	border-color: ${(props) => props.theme.colors.white[0]};
	background: ${(props) => props.theme.colors.black[0]};

	&::placeholder {
		color: ${(props) => transparentize(0.4, props.theme.colors.white[0])};
	}
`;

export const SignupInput = styled(BaseInput)`
	${inputCss}
`;

export const SignupTextArea = styled(BaseTextArea)`
	${inputCss}
`;

export const SignupForm = styled.div`
	overflow: hidden;
`;
