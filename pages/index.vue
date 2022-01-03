<template>

  <v-app>
    <h2 class="title text-h4 text-center font-weight-bold">
      おすすめメンター
    </h2>
    <v-container>
      <v-row class="content">
        <v-col
          v-for="(mentor) in displayLists"
          :key="mentor.id"
          cols="12"
          sm="12"
          md="6"
          class="card-item"
        >
          <v-card class="py-3">
            <v-row>
              <v-col cols="4">
                <v-list-item class="grow card-icon">
                  <v-list-item-avatar size="100" class="mx-auto mt-10" color="grey darken-3">
                    <v-img
                      class="elevation-6 mx-auto"
                      alt=""
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                  </v-list-item-avatar>
                </v-list-item>
                <v-list-item >
                  <v-list-item-title class="text-h6 font-weight-bold text-center">
                    {{ mentor.name}}
                  </v-list-item-title>
                </v-list-item>
              </v-col>
              <v-col cols="8">
                <v-card-title class="font-weight-bold">
                  {{ mentor.plan.title}}
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12">
                      <span>レベル</span>
                      <v-chip
                        class="ma-2"
                        link
                        color="indigo darken-3"
                        outlined
                        pill
                      >
                        {{ levelListView[mentor.senpai_level] }}
                        <v-icon right>
                          mdi-account-outline
                        </v-icon>
                      </v-chip>
                    </v-col>
                    <v-col cols="12">
                      <span>スキル</span>
                      <v-chip
                        v-for="tag in mentor.tags"
                        :key="tag"
                        link
                        class="mx-1"
                        color="primary"
                      >
                        {{ tag.content}}
                      </v-chip>
                    </v-col>
                    <v-col cols="12">
                      <span>料金</span>
                      <span class="font-weight-bold ml-5 text-h6">
                        {{ payPlanView[mentor.plan.payment_plan]}} {{ mentor.plan.price}}円～
                      </span>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
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

export default {
  name: 'IndexPage',
  async asyncData ({ store }) {
    await store.dispatch('getMentorRecommendAll')
    return {
      page: 1,
      displayLists: [],
      pageSize: 20,
      length:0,
      payPlanView: {
        1: '月額',
        2: '単発',
      },
      levelListView: {
        1: '学習経験なし',
        2: 'アプリ開発経験あり',
        3: 'チーム開発経験あり',
        4: '転職活動中',
        5: 'エンジニア',
        6: 'フリーランス',
        7: '事業経営者',
      }
    }
  },
  computed : {
    ...mapGetters(['mentors'])
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

<style scoped>
  .content {
    margin: 0 auto;
    max-width: 1200px;
  }
</style>
