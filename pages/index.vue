<template>

  <v-app>
    <h2 class="title text-h4 text-center font-weight-bold">
      おすすめメンター
    </h2>
    <v-container>
    <v-row justify="center" class="content">
      <v-col
        v-for="(mentor) in mentors"
        :key="mentor.id"
        cols="12"
        sm="8"
        md="6"
        class="card-item"
      >
        <v-card class="px-2 py-2" height="270px">
          <v-card-title class="font-weight-bold">
            {{ mentor.plan.title}}
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                レベル
                <span>{{ levelListView[mentor.senpai_level] }}</span>
              </v-col>
              <v-col cols="12">
                タグ
                <span ></span>
                <v-chip
                  v-for="tag in mentor.tags"
                  :key="tag"
                  link
                  class="mx-1"
                >{{ tag.content}}</v-chip>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-list-item class="grow card-icon">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ mentor.name}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <dev class="card-price" >
              <p>料金：{{ payPlanView[mentor.plan.payment_plan]}} {{ mentor.plan.price}}円～</p>
            </dev>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    </v-container>
  </v-app>

</template>

<script>

export default {
  name: 'IndexPage',
  data() {
    return {
      mentors: [{}],
      payPlanView: {
        1: "月額",
        2: "単発",
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
  async asyncData({ app }) {
    const response = await app.$axios.$get('/api/public/mentor_recommend');
    return { mentors: response.mentor_list};
  }
}
</script>

<style scoped>
  .content {
    margin: 0 auto;
    max-width: 1200px;
  }
  .card-item {
    position: relative;
  }
  .card-item .card-price {
    position: absolute;
    bottom: 10px;
    right: 20px;
  }
  .card-item .card-icon {
    position: absolute;
    bottom: 10px;
    left: 10px;
  }
  .title {
    margin: 60px 0;
  }
</style>
