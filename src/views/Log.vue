<template>
  <div class="log ma-4">
    <div class="subheading grey--text">Development log</div>

    <div class="mt-4 pa-4">
        <vue-markdown>{{content}}</vue-markdown>
    </div>
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

<style scoped>

</style>
