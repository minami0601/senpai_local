<template>
  <v-card>
    <v-app-bar
    color="pink"
    height="90">
      テストサイト
    </v-app-bar>

  </v-card>
</template>

<script>
  export default {
    data() {
			return {
				drawer: false,
				group: null,
			}
    },

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style scoped>
	.header__inner {
		max-width: 1000px;
	}
</style>
