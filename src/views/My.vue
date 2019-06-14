<template>
  <div class="my ma-4">
    <div class="subheading grey--text">My information</div>

    <v-layout row wrap>
      <!-- 我的个人信息 -->
      <v-flex xs12 sm4 md4>
        <v-card flat class="text-xs-center ma-3">
          <v-responsive class="pt-4">
            <v-avatar size="100">
              <img :src="user.userAvatar">
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading">{{user.userName}}</div>
            <div class="grey--text">{{user.userDOB}}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="grey">
              <v-icon small left>message</v-icon>
              <span>Message</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <!-- 我的文章列表 -->
      <v-flex xs12 sm8 md8>
        <v-expansion-panel popout class="ma-3">
          <v-expansion-panel-content v-for="project in articles" :key="project.title">
            <div slot="header">{{project.title}}</div>
            <v-card>
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">created in {{ project.created }}}</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user
    },
    articles() {
      return this.$store.state.articles
    }
  },
};
</script>
