const {
	title,
	links,
} = require('../config')

const pkg = require('../../package.json')

module.exports.general = {
	data: () => ({
		fixed: true,
		title,
		links,
		author: pkg.author,
	}),
}
