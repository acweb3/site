import styled, { css } from "styled-components";

export const CoolCircleEllipsis = styled.div`
	font-family: ${(props) => props.theme.fontFamily.sansSerif};
	font-style: italic;
	font-weight: 700;
	font-size: 64px;
	line-height: 44%;

	letter-spacing: -0.1em;

	padding: 0px 55px 0px 38px;

	display: inline-flex;
	align-items: center;
	justify-content: center;

	box-shadow: 16px 12px;

	border: 1px solid ${(props) => props.theme.colors.black[0]};
	border-radius: 50%;
	background: ${(props) => props.theme.colors.white[0]};

	opacity: 0;

	${(props) =>
		props.isPlaceholder &&
		css`
			max-height: 0;
		`}

	${(props) =>
		props.isVisible &&
		css`
			padding: 40px 55px 54px 38px;
			position: absolute;
			top: -32px;
			left: 0;
			opacity: 1;
		`}

	${(props) =>
		props.isSmall &&
		css`
			font-size: 16px;
			padding: 9px 28px 11px 23px;
			box-shadow: 8px 6px;
			top: -24px;

			& > svg {
				margin-right: 4px;
				margin-top: 2px;
			}
		`}

	${(props) =>
		props.isScript &&
		css`
			font-size: 80px;
			font-family: ${props.theme.fontFamily.script};
			font-weight: 100;
			text-decoration: underline;
			letter-spacing: 0;
			padding: 42px 51px 50px 38px;
		`}

	${(props) =>
		props.isInverted &&
		css`
			color: ${(props) => props.theme.colors.white[0]};
			background-color: ${(props) => props.theme.colors.black[0]};
			box-shadow: none;
		`}

	${(props) =>
		props.isShadow &&
		css`
			color: ${(props) => props.theme.colors.white[0]};
			background-color: ${(props) => props.theme.colors.white[0]};

			border: 1px solid ${(props) => props.theme.colors.black[0]};

			opacity: 1;
			position: absolute;
			top: -19px;
			right: -6px;
		`}

	${(props) =>
		!(props.isVisible || props.isShadow) &&
		css`
			padding-top: 0;
			padding-bottom: 0;
		`}
`;

export const CoolCircle = styled.span`
	position: relative;
	height: 1px;
	overflow: visible;
	margin-right: 24px;

	${(props) =>
		props.isSmall &&
		css`
			margin-right: 12px;
		`}
`;
