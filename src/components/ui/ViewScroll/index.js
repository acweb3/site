import * as S from "components/ui/ViewScroll/ViewScroll.styled";
import React, { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";

export const ViewScroll = ({ className, children, threshold = 0.7 }) => {
	const bodyRef = useRef();
	const { inViewport } = useInViewport(bodyRef, { threshold });
	const [isInView, setIsInview] = useState(false);

	useEffect(() => {
		if (inViewport) {
			setIsInview(true);
		}
	}, [inViewport]);

	return (
		<S.ViewScroll
			className={className}
			isInView={isInView}
			ref={bodyRef}
			{...animation}
		>
			{children}
		</S.ViewScroll>
	);
};
