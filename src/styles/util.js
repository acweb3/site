import { css } from "styled-components";

export const imageTint = css`
	filter: grayscale(100%) brightness(1.4);
	mix-blend-mode: multiply;
`;

export const imageTintObj = {
	filter: "grayscale(100%) brightness(1.4)",
	mixBlendMode: "multiply",
};

export const util = {
	imageTint,
};
