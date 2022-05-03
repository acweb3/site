import * as S from "components/Footer/Footer.styled";
import { FooterContent } from "components/Footer/FooterContent";
import React from "react";

export const Footer = () => {
	return (
		<>
			<S.FooterSpacer>
				<FooterContent />
			</S.FooterSpacer>
			<S.Footer>
				<S.FooterSpacer>
					<FooterContent isVisible />
				</S.FooterSpacer>
			</S.Footer>
		</>
	);
};
