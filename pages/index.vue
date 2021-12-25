<template>
  <v-container class="my-10">
      <Mentor />
  </v-container>
</template>

<script>
import Mentor from "@/components/Mentor"

export default {
  name: 'IndexPage',
  component: {
    Mentor,
  },
  data() {
    return {
      mentors:[
        {
          id: 1,
          name: "aaa",
          age: 16
        },
        {
          id: 2,
          name: "bbb",
          age: 16
        },
        {
          id: 3,
          name: "ccc",
          age: 16
        },
      ]
    }
  }
}
</script>
