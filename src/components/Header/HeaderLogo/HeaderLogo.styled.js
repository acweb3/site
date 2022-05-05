import styled from "styled-components";

export const Waves = styled.div`
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
