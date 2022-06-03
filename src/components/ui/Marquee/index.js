import * as S from "components/ui/Marquee/Marquee.styled";

export const Marquee = ({ className, children }) => {
	return (
		<S.Marquee className={className}>
			<S.MarqueeContent>
				<S.MarqueeSpan>{children}</S.MarqueeSpan>
				<S.MarqueeSpan>{children}</S.MarqueeSpan>
			</S.MarqueeContent>
		</S.Marquee>
	);
};
