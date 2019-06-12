<template>
  <div class="my ma-4">
    <div class="subheading grey--text">My information</div>

    <v-container class="my-5">
      <v-layout row wrap>
          <v-flex xs12 sm4 md4>
            <v-card class="text-xs-center ma-3">
              <v-card-text>
                <div class="subheading">person.name</div>
                <div class="grey--text">person.role</div>
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="grey">
                  <v-icon small left>message</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 sm8 md8>
            article list
          </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>
