exports.createPages = async function ({ actions, graphql }) {
	const {
		data: {
			allFile: { edges },
		},
	} = await graphql(`
		query File {
			allFile {
				edges {
					node {
						name
						base
						publicURL
						relativeDirectory
					}
				}
			}
		}
	`);

	const fullyAccessibleURL =
		process.env.ENV_TARGET === "development"
			? "https://dev.aboltc.com"
			: "https://www.aboltc.com";

	const {
		node: { publicURL: featureURL },
	} = edges.find((edge) => edge.node.name === "feature");

	actions.createPage({
		component: require.resolve(`./src/templates/Index.js`),
		path: "/",
		context: {
			thumbnail: `${fullyAccessibleURL}${featureURL}`,
		},
	});
};
