import styled from "styled-components";

export const WeAre = styled.div`
	color: ${(props) => props.theme.colors.black[0]};
	background: ${(props) => props.theme.colors.white[0]};

	padding: 0 120px 32px;
	margin-top: -16px;

	display: flex;
	justify-content: center;
`;
