<template>
  <div class="home">
    <v-jumbotron dark color="primary">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">Welcome to XJBX</h3>

            <span
              class="subheading"
            >Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>

            <v-divider class="my-3"></v-divider>

            <div class="title mb-3">Check out our newest features!</div>

            <v-btn class="mx-0" dark large flat>See more</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>

    <div>
      <v-btn class="indigo white--text">Click me</v-btn>
      <v-btn depressed class="indigo white--text">Click me</v-btn>
      <v-btn flat class="indigo white--text">Click me</v-btn>
    </div>

    <div>
      <v-btn class="indigo white--text">
        <v-icon left>email</v-icon>
        <span>发邮件给我</span>
      </v-btn>
      <v-btn small class="indigo white--text">
        <v-icon left>email</v-icon>
        <span>发邮件给我</span>
      </v-btn>
      <v-btn small fab depressed dark color="purple">
        <v-icon>favorite</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>
