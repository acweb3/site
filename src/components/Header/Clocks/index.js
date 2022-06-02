import * as S from "components/Header/Clocks/Clocks.styled";
import { useEffect, useState } from "react";

export const Clocks = () => {
	const [timeEST, setTimeEST] = useState(
		new Date().toLocaleString("en-US", {
			timeZone: "America/New_York",
			hour: "2-digit",
			minute: "2-digit",
		})
	);
	const [timeCEST, setTimeCEST] = useState(
		new Date().toLocaleString("en-US", {
			timeZone: "Europe/Brussels",
			hour: "2-digit",
			minute: "2-digit",
		})
	);

	useEffect(() => {
		const sti = setInterval(() => {
			setTimeEST(
				new Date().toLocaleString("en-US", {
					timeZone: "America/New_York",
					hour: "2-digit",
					minute: "2-digit",
				})
			);
			setTimeCEST(
				new Date().toLocaleString("en-US", {
					timeZone: "Europe/Brussels",
					hour: "2-digit",
					minute: "2-digit",
				})
			);
		}, 3000);

		return () => {
			clearInterval(sti);
		};
	}, []);

	const [hoursEST, minutesEST] = timeEST.split(":");
	const [hoursCEST, minutesCEST] = timeCEST.split(":");

	return (
		<S.Clocks>
			<S.Clock>
				<S.ClockAttribute>philadelphia</S.ClockAttribute>
				<S.ClockAttribute>
					{hoursEST} <S.ClockBlink>:</S.ClockBlink> {minutesEST}
				</S.ClockAttribute>
			</S.Clock>

			<S.Clock>
				<S.ClockAttribute>milan</S.ClockAttribute>
				<S.ClockAttribute>
					{hoursCEST} <S.ClockBlink>:</S.ClockBlink> {minutesCEST}
				</S.ClockAttribute>
			</S.Clock>
		</S.Clocks>
	);
};
