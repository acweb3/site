import { useWindowSize } from "common/hooks/useWindowSize";
import { Clocks } from "components/Header/Clocks";
import * as S from "components/Header/Header.styled";
import { HeaderMarquee } from "components/Header/HeaderMarquee";
import { Bolts } from "components/ui/Bolts";
import { Column } from "components/ui/Column";
import { CoolButton } from "components/ui/CoolButton";
import { CoolCircle } from "components/ui/CoolCircle";
import { useOpeningAnimationContext } from "contexts/OpeningAnimationContext";
import { useEffect, useState } from "react";

export const Header = () => {
	const { isMobile } = useWindowSize();
	const { isCollapsed } = useOpeningAnimationContext();

	const [resizeHeight, setResizeHeight] = useState(0);

	useEffect(() => {
		setResizeHeight(window.visualViewport.height);
	}, []);

	return (
		<S.Header>
			<HeaderMarquee />
			<S.HeaderInfoOffset
				resizeHeight={resizeHeight}
				isCollapsed={isCollapsed}
			>
				<S.HeaderInfo isCollapsed={isCollapsed}>
					<Bolts
						css={`
							margin-bottom: 32px;
						`}
					/>
					{!isMobile && <Clocks />}
					<Column
						css={`
							flex: 1;
							justify-content: center;
							margin-left: auto;
							margin-right: auto;
							max-width: 880px;
							text-align: center;
						`}
					>
						<S.HeaderBigAssHeader>
							<CoolCircle isScript>we create</CoolCircle>
							code,
							<br />
							community,
							<br />
							and cool stuff
						</S.HeaderBigAssHeader>
						<Column.Text
							css={`
								font-size: ${(props) =>
									props.theme.fontSize.h5};
								line-height: 0.95;

								padding: 0 16px;

								${(props) => props.theme.breakpoints.extraSmall`
									width: 640px;
									padding: 0;

									font-size: ${(props) => props.theme.fontSize.h4};
								`}
							`}
						>
							we're a full-service web3 studio. we build discords,
							write smart contracts, and develop websites for nft
							projects.
						</Column.Text>

						<CoolButton
							css={`
								margin: 40px auto 88px;

								${(props) => props.theme.breakpoints.extraSmall`
									margin: 48px auto 32px;`}
							`}
						>
							let's get started
						</CoolButton>
					</Column>
					<Bolts
						css={`
							margin-top: 32px;
						`}
					/>
				</S.HeaderInfo>
			</S.HeaderInfoOffset>
		</S.Header>
	);
};
