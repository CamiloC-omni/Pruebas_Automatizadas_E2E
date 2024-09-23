exports.config = {
	output: './output',
	helpers: {
		Playwright: {
			browser: 'chromium',
			url: 'https://stg-v3-oms.omni.pro/',
			show: true,
		},
	},
	include: {
		I: './steps_file',
		LoginPage: './pages/LoginPage',
		CreateUser: './pages/CreateUser',
	},
	mocha: {},
	bootstrap: null,
	timeout: null,
	teardown: null,
	hooks: [],
	gherkin: {
		features: './features/*.feature',
		steps: ['./step_definitions/loginSteps.ts', './step_definitions/createUserNewStep.ts'],
	},
	plugins: {
		screenshotOnFail: {
			enabled: true,
		},
		allure: {
			enabled: true,
			outputDir: './output/allure-results',
			require: '@codeceptjs/allure-legacy',
		},
		tryTo: {
			enabled: true,
		},
		retryFailedStep: {
			enabled: true,
		},
		retryTo: {
			enabled: true,
		},
		eachElement: {
			enabled: true,
		},
		pauseOnFail: {},
	},
	stepTimeout: 0,
	stepTimeoutOverride: [
		{
			pattern: 'wait.*',
			timeout: 0,
		},
		{
			pattern: 'amOnPage',
			timeout: 0,
		},
	],
	tests: './*_test.ts',
	name: 'PLAYWRIGHT-TESTING-BDD',
}
