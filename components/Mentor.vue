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
</template>
<script>
  export default {
		props: {
			displayLists: {
				type: Array,
			},
		},
    data() {
			return {
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
  }
</script>
