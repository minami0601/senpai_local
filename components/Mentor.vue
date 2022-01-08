<template>
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
          <v-col cols="5">
            <v-list-item class="grow card-icon">
              <v-list-item-avatar size="80"  class="mx-auto mt-10" color="grey darken-3">
                <v-img
                  class="elevation-6 mx-auto"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                />
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item class="font-weight-bold">
              <a href="#" class="name-link">{{ mentor.name }}</a>
            </v-list-item>
          </v-col>
          <v-col cols="7">
            <v-card-title class="font-weight-bold">
              <a href="" class="link-text">{{ mentor.plan.title }}</a>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <span class="sub-title">レベル</span>
                  <v-chip
                    class="ma-2 chip"
                    link
                    color="indigo darken-3"
                    outlined
                    pill
                  >
                    {{ levelList(mentor.senpai_level) }}
                    <v-icon right>
                      mdi-account-outline
                    </v-icon>
                  </v-chip>
                </v-col>
                <v-col cols="12">
                  <span class="sub-title">スキル</span>
                  <v-chip
                    v-for="tag in mentor.tags"
                    :key="tag"
                    link
                    class="mx-1 chip"
                    color="primary"
                  >
                    {{ tag.content }}
                  </v-chip>
                </v-col>
                <v-col cols="12">
                  <span class="sub-title">料金</span>
                  <span class="font-weight-bold ml-5 price-text">
                    {{ payPlan(mentor.plan.payment_plan) }} {{ mentor.plan.price }}円～
                  </span>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    displayLists: {
      type: Array,
      required: true
    }
  },
  computed: {
    levelList: function() {
      return function(level) {
        return this.$LEVEL_LIST[level]
      }
    },
    payPlan: function() {
      return function(plan) {
        return this.$PAY_PLAN[plan]
      }
    }
  },
}
</script>

<style scoped>
  .link-text, .name-link {
    color: #000000;
    text-decoration: none;
  }
  .link-text:hover, .name-link:hover {
    opacity: .6;
  }
  .name-link {
    font-size: 1.25em;
    display: block;
    margin: 0 auto;
  }
  .price-text {
    font-size: 1.25em;
  }
  @media screen and (max-width: 600px) {
    /* 600px以下に適用されるCSS） */
    .name-link {
      font-size: 12px;
    }
    .price-text {
      font-size: 1em;
    }
    .sub-title {
      display: block;
    }
    .chip {
      font-size: 12px;
      height: 24px;
    }
  }

</style>
