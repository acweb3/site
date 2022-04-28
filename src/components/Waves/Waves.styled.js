import styled from "styled-components";

export const Waves = styled.div`
	height: 450px;
	width: calc(100vw - 160px);
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	margin: 48px 80px 0;
	box-sizing: border-box;
	border-radius: 0 0 32px 32px;
	border-bottom: 1px solid ${(props) => props.theme.colors.white[0]}; ;
`;
