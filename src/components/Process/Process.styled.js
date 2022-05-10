import styled from "styled-components";

export const ProcessSteps = styled.div`
	display: flex;
	flex-direction: column;

	min-height: 1200px;
	flex: 1;
`;

export const ProcessBannerCopy = styled.div`
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

export const ProcessBanner = styled.div`
	position: relative;
	border-right: 1px solid ${(props) => props.theme.colors.black[0]};
	margin-right: 64px;
	width: 48px;
	padding-bottom: 160px;
`;

export const Process = styled.div`
	position: relative;

	display: flex;
	flex-direction: row;
	padding: 72px 120px 48px 72px;
`;
