import React, { useState } from "react";
import { Close32 } from "@carbon/icons-react";

import * as S from "./styled";

export const Marquee = ({ isMarqueeShowing, close }) => {
	return (
		<S.MarqueeContainer isMarqueeShowing={isMarqueeShowing}>
			<marquee
				css={`
					display: flex;
					letter-spacing: 0.2rem;
					text-transform: lowercase;
				`}
			>
				left click and save! 2022 creator special available now
			</marquee>

			<S.CrossSection onClick={close}>
				<Close32 />
			</S.CrossSection>
		</S.MarqueeContainer>
	);
};
