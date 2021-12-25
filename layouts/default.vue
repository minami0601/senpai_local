<template>
  <v-app id="inspire">
    <Header />
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
  },
  data () {
    return {
    }
  }
}
</script>
