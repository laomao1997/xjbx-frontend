<template>
  <div class="articles ma-4">
    <div class="subheading grey--text">Articles</div>

    <v-container class="my-5">
      <v-card class="pa-3" v-for="project in articles" :key="project.title">
        <v-layout row wrap>
          <v-flex xs12 md6>
            <div class="caption grey--text">Title</div>
            <div>{{project.title}}</div>
          </v-flex>

          <v-flex xs4 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>

          <v-flex xs4 sm4 md2>
            <div class="caption grey--text">Created</div>
            <div>{{project.created}}</div>
          </v-flex>

          <v-flex xs4 sm4 md2>
            <div class="caption grey--text">Modified</div>
            <div>{{project.modified}}</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    articles() {
      return this.$store.state.articles
    }
  },
};
</script>