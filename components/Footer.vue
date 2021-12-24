<template>
  <v-footer
    light
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="py-4 text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return{
      links: ["ログイン","新規登録"]
    }
  },
}
</script>
