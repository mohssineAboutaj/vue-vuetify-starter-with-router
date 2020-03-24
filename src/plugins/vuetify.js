import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import en from 'vuetify/es5/locale/en'

// import vuetify colors
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		options: {
			customProperties: true,
		},
		themes: {
			light: {
				primary: colors.blue.darken4,
				secondary: colors.secondary,
				accent: colors.accent,
				error: colors.error,
				info: colors.info,
				success: colors.success,
				warning: colors.warning,
			},
			dark: {
				primary: colors.secondary,
			},
		},
	},
	lang: {
		locales: { en },
		current: 'en'
	},
	icons: {
		iconfont: 'fa',
	},
});
