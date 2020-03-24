// site title, description, & general info
/**
 * @type {String} website title
 */
const title = "Vue Vuetify FontAwesome - starter app"

// links & routes
/**
 * @type {Array} all routes in the application
 *
 * @property {String} icon icon to show aside to the route title
 * @property {String} title title of the route
 * @property {String} to path of the route
 * @property {String} component component name of the route
 * @property {Boolean} hidden hidden from navbar or any navigation bar
 */
let links = [
	{
		icon: 'home',
		title: 'Home',
		to: '/',
		component: 'Home',
	},
	{
		icon: 'info-circle',
		title: 'About',
		to: '/about',
		component: 'About',
	},
]


// exporting
export {
	title,
	links,
}
