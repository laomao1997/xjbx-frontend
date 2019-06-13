<template>
  <nav>
    <v-toolbar app dark flat color="primary">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Xjbx</span>
        <span>博客</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- 下拉菜单 -->
      <div class="text-xs-center">
        <v-menu offset-y>
          <v-btn slot="activator" dark flat>
            <v-icon>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
          <v-list>
            <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
              <v-list-tile-title>{{link.text}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>
      <LoginDialog />
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/avatar.png">
          </v-avatar>
          <p class="subheading mt-1">Jiachen Liu</p>
        </v-flex>
        <Popup/>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";
import LoginDialog from "./LoginDialog";

export default {
  components: { Popup, LoginDialog },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "home", text: "Home", route: "/" },
        { icon: "folder", text: "Articles", route: "/articles" },
        { icon: "info", text: "About", route: "/about" },
        {
          icon: "confirmation_number",
          text: "Calculator",
          route: "/calculator"
        },
        { icon: "person", text: "My Info", route: "/my" }
      ]
    };
  }
};
</script>
