import React from "react";

import * as S from "./styled";

/*
WHAT WE DO
- web3 / blockchain enabled web development
- dapps
- smart contracts
- andrew activations 
- mint sites
- auction apps
- NFT marketplaces
- community development
- discord development
- NFT / crypto strategy 
- culture consulting 
- tech support for retirees
*/

export const Card = ({ className, children }) => {
	return (
		<S.CardWrapper className={className}>
			<S.CardContainer>{children}</S.CardContainer>
		</S.CardWrapper>
	);
};
