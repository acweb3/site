import React from "react";

import * as S from "./styled";

export const Header = () => {
	return (
		<S.HeaderContainer>
			<S.BorderWrapper>
				<S.HeaderContent>
					<S.H1>code, community and cool stuff.</S.H1>
					<S.H2>
						a<S.EmojiWidth>⚡</S.EmojiWidth>c is a web3 catalyst.
					</S.H2>
				</S.HeaderContent>
			</S.BorderWrapper>
		</S.HeaderContainer>
	);
};
