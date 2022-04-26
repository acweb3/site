import React from "react";

import * as S from "./styled";

export const Step = ({ children }) => {
	return (
		<S.Step>
			<S.StepImage />

			<S.Caption>{children}</S.Caption>
		</S.Step>
	);
};
