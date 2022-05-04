import LogoBolt from "assets/icons/logo--bolt.inline.svg";
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

export const HeaderLogoMain = styled(LogoBolt)`
	transform: rotate(12deg) scale(1.4);
`;

export const HeaderLogoOrbit = styled(Logo)`
	width: 48px;
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
	animation: ${rotate} 60s infinite linear;
`;

export const HeaderLogo = styled.div`
	position: relative;
	width: 180px;
	height: 180px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
