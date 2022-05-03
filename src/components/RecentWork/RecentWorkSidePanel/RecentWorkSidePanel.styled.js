import styled from "styled-components";

export const RecentWorkSidePanel = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 720px;
	height: 100vh;

	box-shadow: ${(props) => props.theme.shadows.medium};
	background: ${(props) => props.theme.colors.white[0]};

	padding: 32px;

	z-index: 999;
`;
