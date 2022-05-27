import Star from "assets/icons/star.inline.svg";
import styled from "styled-components";

export const CoolStarShape = styled(Star)`
	position: absolute;
	top: 0;
	left: 0;
`;

export const CoolStarCopy = styled.div`
	font-family: ${(props) => props.theme.fontFamily.mono};
	position: absolute;
	top: 39px;
	left: 33px;
	letter-spacing: 3.2px;

	font-weight: 600;
`;

export const CoolStar = styled.div`
	position: relative;

	width: 100px;
	height: 100px;

	display: flex;
	align-items: center;
	justify-content: center;
`;
