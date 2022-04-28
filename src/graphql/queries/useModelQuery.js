import { graphql, useStaticQuery } from "gatsby";

export const useModelQuery = () =>
	useStaticQuery(graphql`
		query ModelQuery {
			allFile(filter: { name: { eq: "scene" }, ext: { eq: ".gltf" } }) {
				edges {
					node {
						publicURL
					}
				}
			}
		}
	`);
