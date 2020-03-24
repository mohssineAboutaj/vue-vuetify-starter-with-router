<div style="text-align: center">
	<img width="100px" style="max-width: 100px;display: inline-block;margin: 5px 15px" src="https://vuejs.org/images/logo.png" />
	<img width="100px" style="max-width: 100px;display: inline-block;margin: 5px 15px" src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" />
	<img width="100px" style="max-width: 100px;display: inline-block;margin: 5px 15px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCpfLNi3k11lMdk8QR9g7r1sqB6sWSC1agQJBEmptS4O9B0HL9" />
</div>

# Vue Vuetify Starter With VueRouter

## About
A [Vuejs](http://vuejs.org/) & [Vuetify](http://vuetifyjs.com/) starter app VueRouter & with [FontAwesome 5](https://fontawesome.com/) icons built using [Vue CLI](https://cli.vuejs.org/)

*Note*: it deosn't have Vuex, if you want it you can install it

## Configuration
+ The `./src/config.js` contains all variables like title & links (for routing)
+ Default language in *English* if you wanna use other lang you need to change html attribute in `./public/index.html` & the import line in `./src/plugins/vuetify.js` wish is like
```js
import en from 'vuetify/es5/locale/en'
...
export default new Vuetify({
	...
	lang: {
		locales: { en },
		current: 'en'
	},
	...
});

```
+ Scss/Sass pre-proccessor support
+ You can add any plugin by following [this way](https://vuejs.org/v2/guide/plugins.html) or as you want

## Features
+ Built in navbar
+ Vue Router
+ Appbar/Navbar & Footer mixins to easy configuration
+ Sidebar navigation
+ Dark mode them swither
+ [FontAwesome 5](https://fontawesome.com/) icons integration
+ PWA (Progressive Web App) integration

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## License
MIT