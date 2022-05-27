import * as S from "components/CallToAction/CallToAction.styled";
import { Bolts } from "components/ui/Bolts";

export const CallToAction = () => {
	return (
		<S.CallToAction>
			<Bolts
				css={`
					margin-bottom: 32px;
				`}
			/>
			<S.CallToActionBox>
				<S.CallToActionLogoBox>
					<S.CallToActionLogo />
				</S.CallToActionLogoBox>
				<S.CallToActionCopy>
					artists, creators, and founders are driving a revolution in
					expression and ownership. your work isn't just another
					product off the shelf — your website, smart contracts, and
					discord builds shouldn't be either.
				</S.CallToActionCopy>
			</S.CallToActionBox>
			<Bolts
				css={`
					margin-top: 32px;
				`}
			/>
		</S.CallToAction>
	);
};
