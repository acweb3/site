import { graphql, useStaticQuery } from "gatsby";

export const useProcessStepsQuery = () =>
	useStaticQuery(graphql`
		query ProcessStepsQuery {
			allFile(
				filter: { relativeDirectory: { eq: "images/processSteps" } }
			) {
				edges {
					node {
						name
						childrenImageSharp {
							gatsbyImageData(
								formats: [AUTO, WEBP, AVIF]
								placeholder: BLURRED
								width: 640
							)
						}
					}
				}
			}
		}
	`);
