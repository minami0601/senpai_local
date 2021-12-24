<template>
  <v-car
	>
    <v-toolbar
			light
			class="px-16"
			height="80"
		>
			<v-row class="header__inner mx-auto">
				<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

				<v-toolbar-title>ロゴ</v-toolbar-title>

				<v-btn plain text>
					<v-icon>mdi-magnify</v-icon>
					メンターを探す
				</v-btn>


				<v-spacer></v-spacer>


				<v-btn
					class="mr-10 font-weight-black"
					large
				>
					ログイン
				</v-btn>

				<v-btn
					large
					class="font-weight-black"
					color="primary"
				>
					新規登録
				</v-btn>

			</v-row>
    </v-toolbar>

		<v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-car>
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
