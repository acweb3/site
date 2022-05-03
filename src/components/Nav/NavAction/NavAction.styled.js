import { BaseButton } from "components/ui/BaseButton";
import { BaseInput } from "components/ui/BaseInput";
import { BaseTextArea } from "components/ui/BaseTextArea";
import styled, { css } from "styled-components";

export const NavActionButton = styled(BaseButton)`
	${(props) =>
		props.isActive &&
		css`
			color: ${(props) => props.theme.colors.white[0]};
			background-color: ${(props) => props.theme.colors.blue[0]};
		`}
`;

export const NavActionSubmit = styled(BaseButton)`
	color: ${(props) => props.theme.colors.white[0]};
	border-color: ${(props) => props.theme.colors.white[0]};
	background: ${(props) => props.theme.colors.black[0]};
	margin: 24px 0 0 auto;
	min-width: 80px;
`;

export const NavActionInputLabel = styled.label`
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
`;

export const NavActionInput = styled(BaseInput)`
	${inputCss}
`;

export const NavActionTextArea = styled(BaseTextArea)`
	${inputCss}
`;

export const NavActionForm = styled.div`
	overflow: hidden;
`;

export const NavActionPopover = styled.div`
	position: absolute;
	top: 60px;
	right: 0;
	padding: 32px;
	min-width: 400px;
	margin: 0 auto;
	box-sizing: border-box;
	color: ${(props) => props.theme.colors.white[0]};
	background: ${(props) => props.theme.colors.black[0]};

	transform: perspective(100px) translateZ(-5px) translateY(20px);
	opacity: 0;

	transition: transform 200ms, opacity 200ms;

	box-shadow: ${(props) => props.theme.shadows.high};
	z-index: 0;

	& > ${NavActionForm} {
		max-height: 0;
		transition: max-height 0ms linear 200ms;
	}

	${(props) =>
		props.isActive &&
		css`
			transition: transform 200ms, opacity 200ms;
			opacity: 1;
			max-height: 4000px;
			transform: translateY(0);

			& > ${NavActionForm} {
				max-height: 9999px;
				transition: max-height 0ms linear 0ms;
			}
		`}

	&::after {
		content: " ";

		position: absolute;
		top: -8px;
		right: 16px;

		transform: rotate(-45deg);
		width: 16px;
		height: 16px;
		background: ${(props) => props.theme.colors.black[0]};
	}
`;

export const NavAction = styled.div`
	position: relative;
	text-decoration: none;

	margin-right: 16px;

	&:last-of-type {
		margin-right: 0;
	}
`;
