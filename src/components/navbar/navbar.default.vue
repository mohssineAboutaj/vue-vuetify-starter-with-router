<template>
  <div class="navbar-component">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :clipped-right="clipped"
      :fixed="fixed"
      app
      :right="right"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in links"
          v-show="!item.hidden"
          :key="i"
          :to="item.path"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>fas fa-{{ item.icon }} </v-icon>
          </v-list-item-action>
          <v-list-item-content class="mx-2">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" :fixed="fixed" color="primary" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-icon>fa-stream</v-icon>
      </v-app-bar-nav-icon>
      <v-spacer />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click="switchTheme()">
        <v-icon>{{ darkMode ? "fas" : "far" }} fa-moon</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
import { general } from "@/mixins/navbar.js";

export default {
  mixins: [general],
};
</script>
