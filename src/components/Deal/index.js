import React from "react";

import * as S from "./styled";
import { Step } from "./Step";

const STEPS = [
	"your idea 💡",
	"call cooper now or schedule for later",
	"meet with a⚡c",
	"approve proposal",
	"we get the job done",
	"you = 😁",
];
const STEPS_COLUMNS = STEPS.reduce(
	(acc, step, index) => {
		if (index % 2 === 1) {
			return [acc[0], [...acc[1], step]];
		}

		return [[...acc[0], step], acc[1]];
	},
	[[], []]
);

export const Deal = () => {
	return (
		<S.DealContainer>
			<S.FixedLogo />

			<>
				<S.Blurb>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					porta a eros quis imperdiet. Cras in ullamcorper tellus.
					Nunc vehicula iaculis erat eu vulputate. Curabitur eros
					diam, gravida a dapibus non, convallis sit amet metus.
					Aliquam ut nunc hendrerit, imperdiet lectus id, pretium
					tellus.
				</S.Blurb>

				<S.Columns>
					{STEPS_COLUMNS.map((steps, index) => {
						return (
							<S.Column key={index} isOffset={index === 1}>
								{steps.map((step) => {
									return <Step key={step}>{step}</Step>;
								})}
							</S.Column>
						);
					})}
				</S.Columns>
			</>
		</S.DealContainer>
	);
};
