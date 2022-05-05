import * as S from "components/Header/HeaderLogo/HeaderLogo.styled";

export const HeaderLogo = () => {
	return (
		<S.HeaderLogo>
			<S.HeaderLogoContent>
				<S.HeaderLogoOrbits>
					{[...Array(11)].map((x, i) => (
						<S.HeaderLogoOrbitContainer key={i} offset={i}>
							<S.HeaderLogoOrbit />
						</S.HeaderLogoOrbitContainer>
					))}
				</S.HeaderLogoOrbits>
			</S.HeaderLogoContent>
		</S.HeaderLogo>
	);
};
