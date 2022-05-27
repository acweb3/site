import { ViewScroll } from "components/ui/ViewScroll";
import styled, { css } from "styled-components";

export const RecentWorkSup = styled.div`
	font-size: 0.5rem;
	font-family: ${(props) => props.theme.fontFamily.mono};
	padding: 4px 8px;
	border: 1px solid ${(props) => props.theme.colors.black[0]};
	height: min-content;
	margin-left: 8px;
	letter-spacing: 2.4px;
	border-radius: 8px;
`;

export const RecentWorkCopy = styled.div`
	max-width: 480px;

	padding-bottom: 48px;
	border-bottom: 1px solid ${(props) => props.theme.colors.black[0]};

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
	display: flex;
`;

export const RecentWorkSpreadCopy = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const RecentWorkRibbon = styled.div`
	position: absolute;
	top: -56px;
	right: -56px;

	background: #98d11d;
	height: 140px;
	width: 140px;

	display: flex;
	align-items: center;
	justify-content: center;

	clip-path: polygon(
		50% 0%,
		61% 35%,
		98% 35%,
		68% 57%,
		79% 91%,
		50% 70%,
		21% 91%,
		32% 57%,
		2% 35%,
		39% 35%
	);
`;

export const RecentWorkProject = styled(ViewScroll)`
	position: relative;

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

	${(props) =>
		props.isRight &&
		css`
			margin-left: auto;
			margin-right: 0;

			& > ${RecentWorkProject} {
				margin-right: 0;
			}
		`}
`;

export const RecentWorkPortfolio = styled.div`
	display: flex;
	flex-direction: column;
	/* width: 100%; */

	& > ${RecentWorkProjects} {
		margin-bottom: 64px;
	}
`;

export const RecentWorkBannerCopy = styled.div`
	font-family: ${(props) => props.theme.fontFamily.mono};
	position: sticky;
	top: 88px;
	left: 0;
	transform: rotate(90deg);
	white-space: nowrap;
	height: 0px;
	line-height: 0;
	width: 0px;
	text-transform: lowercase;
	letter-spacing: 1.6px;
`;

export const RecentWorkBanner = styled.div`
	position: relative;
	border-right: 1px solid ${(props) => props.theme.colors.black[0]};
	margin-right: 64px;
	width: 48px;
	padding-bottom: 160px;
`;

export const RecentWork = styled.div`
	position: relative;

	display: flex;
	flex-direction: row;
	padding: 88px 0 0;
`;
