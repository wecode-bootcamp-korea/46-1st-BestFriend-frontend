export const MAIN_CATEGORIES = {
  plants: {
    title: '식물',
    path: '/list?subCategoryId=1&subCategoryId=2&subCategoryId=3&subCategoryId=4',
    subCategories: [
      { id: 1, title: '초보자도 키우기 쉬워요' },
      { id: 2, title: '선물하기 좋아요' },
      { id: 3, title: '공기를 정화해줘요' },
      { id: 4, title: '어두운 곳에서도 잘 자라요' },
    ],
  },
  pots: {
    title: '화분',
    path: '/list?subCategoryId=5&subCategoryId=6&subCategoryId=7',
    subCategories: [
      { id: 5, title: '도자기 화분' },
      { id: 6, title: '토분' },
      { id: 7, title: '유약분' },
    ],
  },
  tools: {
    title: '관리상품',
    path: '/list?subCategoryId=8&subCategoryId=9&subCategoryId=10',
    subCategories: [
      { id: 8, title: '스프레이' },
      { id: 9, title: '물뿌리개' },
      { id: 10, title: '모종삽' },
    ],
  },
};

// export const SUBCATEGORIES = [
//   { id: 1, title: '초보자도 키우기 쉬워요' },
//   { id: 2, title: '선물하기 좋아요' },
//   { id: 3, title: '공기를 정화해줘요' },
//   { id: 4, title: '어두운 곳에서도 잘 자라요' },
//   { id: 5, title: '도자기 화분' },
//   { id: 6, title: '토분' },
//   { id: 7, title: '유약분' },
//   { id: 8, title: '스프레이' },
//   { id: 9, title: '물뿌리개' },
//   { id: 10, title: '모종삽' },
// ];