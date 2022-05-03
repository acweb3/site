import * as S from "components/Clocks/Clocks.styled";
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
		setInterval(() => {
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
	}, []);

	const [hoursEST, minutesEST] = timeEST.split(":");
	const [hoursCEST, minutesCEST] = timeCEST.split(":");

	return (
		<S.Clocks>
			<S.Clock>
				<S.ClockAttribute>Philadelphia</S.ClockAttribute>
				<S.ClockAttribute>
					{hoursEST} <S.ClockBlink>:</S.ClockBlink> {minutesEST}
				</S.ClockAttribute>
			</S.Clock>

			<S.Clock>
				<S.ClockAttribute>Paris</S.ClockAttribute>
				<S.ClockAttribute>
					{hoursCEST} <S.ClockBlink>:</S.ClockBlink> {minutesCEST}
				</S.ClockAttribute>
			</S.Clock>
		</S.Clocks>
	);
};
