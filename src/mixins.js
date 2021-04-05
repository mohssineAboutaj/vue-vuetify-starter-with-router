import { links, title, author } from "./config";

// global
export const global = {
  methods: {
    xyz() {
      console.log("XYZ methods from mixins {global}");
    },
  },
};

// navbar
export const navbar = {
  data: () => ({
    darkMode: false,
    clipped: false,
    drawer: false,
    fixed: false,
    miniVariant: false,
    right: false,
    rightDrawer: false,
    title,
    links,
  }),
  methods: {
    switchTheme() {
      this.$vuetify.theme.dark = this.darkMode = !this.$vuetify.theme.dark;
      console.log("dark mode: " + this.darkMode);
    },
  },
  beforeMount() {
    // miximize sidebar on large screens
    this.drawer = window.innerWidth > 1200 ? true : false;
  },
};

// footer
export const footer = {
  data: () => ({
    fixed: false,
    title,
    links,
    author: author || "no author",
  }),
};
