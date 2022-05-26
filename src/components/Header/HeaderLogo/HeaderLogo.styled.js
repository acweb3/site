import Logo from "assets/icons/logo.inline.svg";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const HeaderLogoOrbit = styled(Logo)`
	width: 128px;
	transform: rotate(-49deg);
`;

export const HeaderLogoOrbitContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	transform: rotate(${(props) => (props.offset * 360) / 11}deg);
	width: 100%;
	height: 100%;
`;

export const HeaderLogoOrbits = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	animation: ${rotate} 120s infinite linear;
`;

export const HeaderLogoContent = styled.div`
	position: relative;

	width: 640px;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 8px;
	margin-bottom: 16px;
`;

export const HeaderLogo = styled.div`
	color: ${(props) => props.theme.colors.blue[0]};
	opacity: 0.08;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	padding-bottom: 48px;
`;
