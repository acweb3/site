import styled, { css } from "styled-components";

export const RecentWorkCopy = styled.div`
	max-width: 480px;

	padding-bottom: 48px;
	border-bottom: 1px solid ${(props) => props.theme.colors.white[0]};

	${(props) =>
		props.isRight &&
		css`
			text-align: right;
			margin-top: 32px;
		`}
`;

export const RecentWorkHeader = styled.h4`
	font-family: ${(props) => props.theme.fontFamily.serif};
	font-size: ${(props) => props.theme.fontSize.h1};
	font-weight: 600;
	margin: 32px 0;
`;

export const RecentWorkSpreadCopy = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const RecentWorkProject = styled.div`
	display: flex;
	flex-direction: column;

	width: ${(props) => props.width}px;

	${(props) =>
		props.isRight &&
		css`
			margin-left: auto;
		`}
`;

export const RecentWorkProjects = styled.div`
	display: flex;
	flex-direction: row;

	& > ${RecentWorkProject} {
		margin-right: 64px;
	}
`;

export const RecentWorkPortfolio = styled.div`
	display: flex;
	flex-direction: column;

	& > ${RecentWorkProjects} {
		margin-bottom: 64px;
	}
`;

export const RecentWorkBannerCopy = styled.div`
	font-family: ${(props) => props.theme.fontFamily.mono};
	position: sticky;
	top: 0;
	left: 0;
	transform: rotate(90deg);
	white-space: nowrap;
	height: 32px;
	width: 0px;
	text-transform: lowercase;
	letter-spacing: 1.6px;
`;

export const RecentWorkBanner = styled.div`
	position: relative;
	border-right: 1px solid ${(props) => props.theme.colors.white[0]};
	margin-right: 64px;
	width: 48px;
`;

export const RecentWork = styled.div`
	position: relative;

	display: flex;
	flex-direction: row;
	padding: 144px 120px 48px;
`;
