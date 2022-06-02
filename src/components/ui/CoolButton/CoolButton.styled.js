import DiscordIcon from "assets/icons/discord.inline.svg";
import EthereumIcon from "assets/icons/ethereum.inline.svg";
import SolanaIcon from "assets/icons/solana.inline.svg";
import styled from "styled-components";

export const CoolButtonDiscordIcon = styled(DiscordIcon)``;

export const CoolButtonEthereumIcon = styled(EthereumIcon)`
	width: 32px;
	height: 32px;
`;

export const CoolButtonSolanaIcon = styled(SolanaIcon)`
	width: 32px;
	height: 32px;
`;

export const CoolButtonIcon = styled.span`
	display: inline-flex;
	align-items: center;
	justify-content: center;

	overflow: hidden;
	border-radius: 16px 0 0;

	height: 64px;
	width: 64px;
	border-right: 1px solid ${(props) => props.theme.colors.white[0]};

	color: ${(props) => props.theme.colors.white[0]};
	background-color: ${(props) => props.theme.colors.black[0]};
`;

export const CoolButtonContent = styled.span`
	display: inline-flex;
	padding: 0 16px 1px;

	position: relative;

	background: ${(props) => props.theme.colors.white[0]};

	height: 100%;
	width: 100%;
	align-items: center;
	justify-content: center;

	&::after {
		content: " ";
		height: 1px;
		width: 22px;
		position: absolute;
		top: 3px;
		right: 3px;
		background: ${(props) => props.theme.colors.black[0]};
	}

	&::before {
		content: " ";
		height: 1px;
		width: 32px;
		position: absolute;
		bottom: 3px;
		left: 3px;
		background: ${(props) => props.theme.colors.black[0]};
	}
`;

export const CoolButton = styled.button`
	cursor: pointer;

	position: relative;

	padding: 0;

	height: 64px;
	min-height: 64px;
	max-height: 64px;

	width: 280px;

	text-align: center;
	box-sizing: content-box;
	font-family: ${(props) => props.theme.fontFamily.mono};
	font-size: ${(props) => props.theme.fontSize.h5};

	text-decoration: none;
	background: ${(props) => props.theme.colors.white[0]};
	color: ${(props) => props.theme.colors.black[0]};
	border: 1px solid ${(props) => props.theme.colors.black[0]};

	display: flex;
	justify-content: center;
	align-items: center;

	transition: transform 100ms;
	border-radius: 16px 0 0 0;

	user-select: none;

	z-index: 2;

	outline: none;

	&::after {
		position: absolute;
		content: " ";
		top: 8px;
		left: 8px;
		width: 100%;
		height: 100%;
		border: 1px solid;
		z-index: -1;
		transform: translate3D(0, 0, 0);
		transition: transform 100ms;
	}

	&:hover,
	&:active,
	&:focus {
		transform: translate3D(-4px, -4px, 0);

		&::after {
			transform: translate3D(3px, 3px, 0);

			${(props) => props.theme.breakpoints.extraSmall`
			transform: translate3D(12px, 12px, 0);
		`}
		}
	}
`;
