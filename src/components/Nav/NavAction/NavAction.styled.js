import { Signup } from "components/Signup";
import { BaseButton } from "components/ui/BaseButton";
import styled, { css } from "styled-components";

export const NavActionSignup = styled(Signup)``;

export const NavActionButton = styled(BaseButton)`
	background-color: transparent;

	${(props) =>
		props.isActive &&
		css`
			color: ${(props) => props.theme.colors.white[0]};
			background-color: ${(props) => props.theme.colors.black[0]};
		`}
`;

export const NavActionPopover = styled.div`
	position: absolute;
	top: 60px;
	right: 0;

	padding: 32px;

	width: calc(100vw - 32px);

	margin: 0 auto;
	box-sizing: border-box;
	color: ${(props) => props.theme.colors.white[0]};
	background: ${(props) => props.theme.colors.black[0]};

	transform: perspective(100px) translateZ(-5px) translateY(20px);
	opacity: 0;

	transition: transform 200ms, opacity 200ms;

	border: 1px solid;
	box-shadow: ${(props) => props.theme.shadows.high};
	z-index: 0;

	& > ${NavActionSignup} {
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

			& > ${NavActionSignup} {
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
		border-top: 1px solid;
		border-right: 1px solid;
	}

	${(props) => props.theme.breakpoints.extraSmall`
		min-width: 400px;
		width: min-content;
		right: 0;
	`}
`;

export const NavAction = styled.div`
	position: relative;
	text-decoration: none;

	height: min-content;

	margin-right: 16px;

	&:last-of-type {
		margin-right: 0;
	}
`;
