import * as S from "components/ui/Bolts/Bolts.styled";

export const Bolts = ({ className }) => {
	return (
		<S.Bolts className={className}>
			<S.Bolt />
			<S.Bolt />
		</S.Bolts>
	);
};
