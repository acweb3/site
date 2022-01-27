import React, { useEffect, useState } from "react";

import * as S from "./styled";

const services = [
	"Rowhomes by Chris Hytha",
	"realitems",
	"pandamonium world",
	"life in action by Bgames ",
	"Lobus",
	"EarthDAO",
	"serving the people / seeds by Lucien Smith",
	"urban anomalies by Ben Zank",
	"Chad Torkelsen",
	"metascapes",
	"LinksDAO",
	"alienfrens",
];

export const Work = () => {
	const [activeItem, setActiveItem] = useState(0);

	useEffect(() => {
		const sti = setInterval(() => {
			setActiveItem((activeItem) => (activeItem + 1) % services.length);
		}, 2500);

		return () => {
			clearInterval(sti);
		};
	}, []);

	return (
		<S.WorkContainer>
			<S.WorkContent>
				<S.Left>
					our clients
					<S.List>
						{services.map((service, index) => (
							<S.ListItem key={service}>
								{activeItem === index && <>→ </>}
								{service}
							</S.ListItem>
						))}
					</S.List>
				</S.Left>
			</S.WorkContent>
		</S.WorkContainer>
	);
};
