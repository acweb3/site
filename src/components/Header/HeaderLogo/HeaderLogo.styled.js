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
	width: 56px;
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
	position: absolute;
	top: -120px;
	right: -60px;

	width: 240px;
	height: 240px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 8px;
	margin-bottom: 16px;
`;

export const HeaderLogo = styled.div`
	position: relative;
	height: 240px;
	width: 320px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	box-sizing: border-box;
	padding-bottom: 48px;
	border-top: 1px solid ${(props) => props.theme.colors.black[0]};
	border-right: 1px solid ${(props) => props.theme.colors.black[0]};
`;
