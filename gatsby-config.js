const config = require("./config");

module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "a⚡️c",
	},
	plugins: [
		"gatsby-plugin-root-import",
		"gatsby-plugin-provide-react",
		{
			resolve: "gatsby-source-sanity",
			options: {
				projectId: "pko7r1bz",
				dataset: "production",
			},
		},
		"gatsby-plugin-styled-components",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/assets/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /\.inline\.svg$/,
				},
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				start_url: `/`,
				background_color: `#FAF7F3`,
				theme_color: `#000`,
				icon: `src/assets/images/favicon.png`,
			},
		},

		// S3 Deploy
		{
			resolve: "gatsby-plugin-s3",
			options: {
				bucketName: config.aws.s3BucketName,
				protocol: "https",
				hostname: config.aws.url,
			},
		},
	],
};
