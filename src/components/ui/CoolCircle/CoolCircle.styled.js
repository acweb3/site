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
		props.isVisible &&
		css`
			padding: 40px 55px 54px 38px;
			position: absolute;
			top: -32px;
			left: 0;
			opacity: 1;
		`}
`;

export const CoolCircle = styled.span`
	position: relative;
	height: 1px;
	overflow: visible;
	margin-right: 24px;
`;
