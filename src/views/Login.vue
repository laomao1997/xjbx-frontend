<template>
  <div class="login">
    <h1>Login 登录</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: '',
    }
  },
  methods: {
    equal () {
      this.current = `${this.operator(
        parseFloat(this.current),
        parseFloat(this.previous)
      )}`
      this.previous = null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
