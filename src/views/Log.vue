<template>
  <div class="log ma-4">
    <div class="subheading grey--text">Development log</div>

    <v-card class="mt-4">
      <v-card-text>
        <vue-markdown>{{content}}</vue-markdown>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import LOG from "!raw-loader!./log.md";

export default {
  components: {
    VueMarkdown
  },
  data() {
    return {
      content: LOG
    };
  },
  mounted() {}
};
</script>
