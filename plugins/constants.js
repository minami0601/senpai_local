const PAY_PLAN =
{
  1: '月額',
  2: '単発'
}
const LEVEL_LIST =
{
  1: '学習経験なし',
  2: 'アプリ開発経験あり',
  3: 'チーム開発経験あり',
  4: '転職活動中',
  5: 'エンジニア',
  6: 'フリーランス',
  7: '事業経営者'
}

export default (context, inject) => {
  inject('PAY_PLAN', PAY_PLAN)
  inject('LEVEL_LIST', LEVEL_LIST)
}
