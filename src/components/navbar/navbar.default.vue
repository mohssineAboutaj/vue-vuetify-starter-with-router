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
        <template v-for="(item, i) in links">
          <v-list-item
            v-if="!item.hidden"
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
        </template>
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
import { navbar } from "@/mixins";

export default {
  mixins: [navbar],
};
</script>
