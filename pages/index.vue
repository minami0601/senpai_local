<template>
  <v-app>
    <h2 class="my-10 text-h4 text-center font-weight-bold">
      おすすめメンター
    </h2>
    <v-container>
      <Mentor
        :displayLists="displayLists"
      />
      <v-content v-if="mentors.length > 20">
        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="length"
            @input = "pageChange"
          ></v-pagination>
        </div>
      </v-content>
    </v-container>
  </v-app>

</template>

<script>
import { mapGetters } from 'vuex'
import Mentor from '@/components/Mentor'

export default {
  name: 'IndexPage',
  components: {
    Mentor
  },
  async asyncData ({ store }) {
    await store.dispatch('mentor/getMentorRecommendAll')
    return {
      page: 1,
      displayLists: [],
      pageSize: 20,
      length:0,
    }
  },
  computed: {
    ...mapGetters('mentor', [
      'mentors'
    ])
  },
  mounted: function(){
    this.length = Math.ceil(this.mentors.length/this.pageSize);
    this.displayLists = this.mentors.slice(0,this.pageSize);
  },
  methods: {
    pageChange: function(pageNumber){
      this.displayLists = this.mentors.slice(this.pageSize*(pageNumber -1), this.pageSize*(pageNumber));
    },
  }
}
</script>
