import * as S from "components/Header/HeaderMarquee/HeaderMarquee.styled";

const LETTERS = ["a", "b", "o", "l", "t", "c"];

export const HeaderMarquee = ({ isCollapsed }) => {
	return (
		<S.HeaderMarquee isCollapsed={isCollapsed}>
			<S.HeaderMarqueeLetters>
				{LETTERS.map((letter, index) => (
					<S.HeaderMarqueeLetter
						key={letter}
						delay={(LETTERS.length - index + 1) * 100}
					>
						{letter}
					</S.HeaderMarqueeLetter>
				))}
			</S.HeaderMarqueeLetters>
		</S.HeaderMarquee>
	);
};
