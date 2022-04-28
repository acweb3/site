import * as S from "components/ViewScroll/ViewScroll.styled";
import React, { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";

export const ViewScroll = ({ className, children }) => {
	const bodyRef = useRef();
	const { inViewport } = useInViewport(bodyRef);
	const [isInView, setIsInview] = useState(false);

	useEffect(() => {
		if (inViewport) {
			setIsInview(true);
		}
	}, [inViewport]);

	return (
		<S.ViewScrollContainer
			className={className}
			isInView={isInView}
			ref={bodyRef}
		>
			{children}
		</S.ViewScrollContainer>
	);
};
