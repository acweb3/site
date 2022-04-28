import styled from "styled-components";

export const MarqueeContainer = styled.div`
	display: ${(props) => (props.isMarqueeShowing ? "flex" : "none")};
	color: #fff;
	background: #000;
	height: 3rem;
	position: fixed;
	align-items: center;
	border-bottom: 1px solid #fff;

	z-index: 999;

	width: 100%;
`;

export const CrossSection = styled.button`
	cursor: pointer;

	height: 100%;

	background: #000;
	color: #fff;
	border: none;
	border-left: 1px solid #fff;

	&:focus {
		outline: none;
		background: #00b;
	}
`;
