const requiredEnvVar = (name, envVar) => {
	if (!envVar) {
		throw new Error(`Environment variable ${name} missing`);
	}

	return envVar;
};

export const config = {
	nodeEnv: requiredEnvVar("nodeEnv", process.env.NODE_ENV),
	canonicalURL: requiredEnvVar(
		"canonicalURL",
		process.env.GATSBY_META_CANONICAL_URL
	),
	signupEndpoint: requiredEnvVar(
		"signupEndpoint",
		process.env.GATSBY_SIGNUP_ENDPOINT
	),
};
