import Logo from "assets/icons/logo.inline.svg";
import { Signup } from "components/Signup";
import styled from "styled-components";

export const SignupModalLogo = styled(Logo)`
	width: 120px;
	margin-top: -48px;
	margin-bottom: 16px;
`;

export const SignupModalClose = styled.div`
	width: 32px;
	height: 32px;

	position: absolute;
	top: 16px;
	right: 32px;

	color: ${(props) => props.theme.colors.white[0]};

	cursor: pointer;
`;

export const SignupModalSignup = styled(Signup)``;

export const SignupModalForm = styled.div`
	position: relative;

	color: ${(props) => props.theme.colors.white[0]};
	background: ${(props) => props.theme.colors.black[0]};
	padding: 64px 32px 48px;
	border-radius: 32px 32px 0 0;

	border-top: 1px solid;

	width: 100vw;

	${(props) => props.theme.breakpoints.extraSmall`
		border: none;
		width: 360px;
		padding: 64px 32px 32px;
		border-radius: 0;
	`}
`;

export const SignupModalValueProp = styled.div`
	display: none;

	${(props) => props.theme.breakpoints.extraSmall`
		color: ${(props) => props.theme.colors.black[0]};
		background: ${(props) => props.theme.colors.white[0]};
		padding: 32px 32px 96px;

		text-align: center;

		width: 280px;

		font-size: ${(props) => props.theme.fontSize.h1};
		font-family: ${(props) => props.theme.fontFamily.serif};

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	`}
`;

export const SignupModal = styled.div`
	position: fixed;
	bottom: 0;

	box-shadow: ${(props) => props.theme.shadows.high};

	z-index: 999;

	display: none;

	transform: translate3D(0, 1000px, 0);
	transition: transform 400ms;

	${(props) => props.theme.breakpoints.extraSmall`
		border: 1px solid;

		bottom: initial;
		top: 120px;
		left: calc(50% - 320px);
		overflow: hidden;
		border-radius: 0 0 0 32px;
	`}

	${(props) =>
		props.isSignup &&
		`
		display: flex;
	`}

	${(props) =>
		props.isVisible &&
		`
		transform: translate3D(0, 0, 0);
	`}
`;
