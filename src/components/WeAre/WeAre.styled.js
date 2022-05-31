import styled from "styled-components";

export const WeAre = styled.div`
	color: ${(props) => props.theme.colors.white[0]};
	background: ${(props) => props.theme.colors.black[0]};

	display: flex;
	flex-direction: column;

	padding: 48px 32px;

	& > * {
		margin-bottom: 32px;
	}

	${(props) => props.theme.breakpoints.extraSmall`
		color: ${(props) => props.theme.colors.black[0]};
		background: ${(props) => props.theme.colors.white[0]};

		margin-top: -16px;
		padding: 0 120px 32px;


		flex-direction: row;
		justify-content: center;

		& > * {
			margin-bottom: 0;
		}
	`}
`;
