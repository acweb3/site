import { Code32, FaceSatisfied32, PaintBrush32 } from "@carbon/icons-react";
import * as S from "components/ui/CoolButton/CoolButton.styled";
import { useEffect, useState } from "react";

const ICONS = [
	<S.CoolButtonSolanaIcon />,
	<FaceSatisfied32 />,
	<PaintBrush32 />,
	<Code32 />,
	<S.CoolButtonEthereumIcon />,
	<S.CoolButtonDiscordIcon />,
];

export const CoolButton = ({ children, ...props }) => {
	const [iconIndex, setIconIndex] = useState(0);

	useEffect(() => {
		const sti = setInterval(() => {
			setIconIndex((iconIndex) => (iconIndex + 1) % ICONS.length);
		}, 400);

		return () => {
			clearInterval(sti);
		};
	}, []);

	return (
		<S.CoolButton {...props}>
			<S.CoolButtonIcon>{ICONS[iconIndex]}</S.CoolButtonIcon>
			<S.CoolButtonContent>{children}</S.CoolButtonContent>
		</S.CoolButton>
	);
};
