<template>
  <div class="articles ma-4">
    <div class="subheading grey--text">Articles</div>

    <v-container class="my-5">
      <v-card class="pa-3" v-for="project in projects" :key="project.title">
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
  data() {
    return {
        projects: [
      {
        title: "我的兄弟叫顺口溜",
        person: "ShunLiu",
        created: "2018-03-25",
        modified: "2019-06-01"
      },
      {
        title: "哈利波特大",
        person: "HarryBot",
        created: "2018-03-19",
        modified: "2019-05-28"
      },
      {
        title: "我的父亲是板凳腿",
        person: "FatherBan",
        created: "2019-01-01",
        modified: "2019-05-27"
      },
      {
        title: "Software Engineering Studio",
        person: "YkWang",
        created: "2017-05-06",
        modified: "2019-01-01"
      }
    ]
    }
  }
};
</script>