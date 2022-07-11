module.exports = {
	content: ['./*.html'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {
				mainBlue: '#0D1A3C',
				red: '#F12A05',
				bgGold: '#D39B23',
				brightRed: 'hsl(12, 88%, 59%)',
				brightRedLight: 'hsl(12, 88%, 69%)',
				brightRedSupLight: 'hsl(12, 88%, 95%)',
				lightBlue: '#2971AC',
				darkBlue: '#084477',
				lightGray: '#F7F7F7',
				darkGrayishBlue: 'hsl(227, 12%, 61%)',
				veryDarkBlue: '#043864',
				veryPaleRed: 'hsl(13, 100%, 96%)',
				veryLightGray: '#F8F9FA',
			},
		},
	},
	plugins: [],
};
