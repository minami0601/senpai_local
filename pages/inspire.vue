<template>
  <div>
    <p>{{ mentors }}</p>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        async asyncData({ store }) {
            if (store.getters['mentors'].length) {
                return
            }
            await store.dispatch('fetchMentors')
        },
        computed: {
            ...mapGetters(['mentors'])
        }
    }
</script>
