<template>
    <v-row justify="center" class="my-15">
      <v-col cols="6">
        <Mentor :mentores="mentores" />
      </v-col>
    </v-row>
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
      mentores:[
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
