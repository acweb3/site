const config = require("./config");

module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "a⚡️c",
	},
	plugins: [
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
		// {
		// 	resolve: "gatsby-plugin-manifest",
		// 	options: {
		// 		icon: "src/images/icon.svg",
		// 		icon_options: {
		// 			purpose: "maskable",
		// 		},
		// 	},
		// },
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
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
