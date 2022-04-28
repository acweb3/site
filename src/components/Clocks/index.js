import * as S from "components/Clocks/Clocks.styled";

export const Clocks = () => {
	return (
		<S.Clocks>
			<S.Clock>
				<S.ClockAttribute>Philadelphia</S.ClockAttribute>
				<S.ClockAttribute>11 : 11 PM</S.ClockAttribute>
			</S.Clock>

			<S.Clock>
				<S.ClockAttribute>Paris</S.ClockAttribute>
				<S.ClockAttribute>4 : 11 AM</S.ClockAttribute>
			</S.Clock>
		</S.Clocks>
	);
};
