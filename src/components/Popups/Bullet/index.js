import React from "react";

import * as S from "./styled";

export const Bullet = ({ children, icon }) => {
	return (
		<S.BulletContainer>
			<S.BulletIconWrapper>{icon}</S.BulletIconWrapper>
			{children}
		</S.BulletContainer>
	);
};
