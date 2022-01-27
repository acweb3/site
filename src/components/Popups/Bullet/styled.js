import styled from "styled-components";

export const BulletIconWrapper = styled.div`
	height: 40px;
	min-width: 40px;

	border-radius: 50%;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: #00b;
	color: #fff;
`;

export const BulletContainer = styled.div`
	font-weight: 100;
	font-size: 1rem;

	display: flex;
	align-items: center;

	margin-bottom: 16px;

	& > ${BulletIconWrapper} {
		margin-right: 16px;
	}
`;
