<template>
	<v-row>
		<v-col
			v-for="n in 10"
			:key="n"
			cols="4"
		>
			<v-card height="200"></v-card>
		</v-col>
	</v-row>
</template>
<script>
  export default {
		props: {
			mentors: {
				type: Array,
			},
		},
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 5000)
      },
    },
  }
</script>
