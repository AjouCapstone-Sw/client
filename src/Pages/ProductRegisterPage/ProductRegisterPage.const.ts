export const TITLE_VALIDATION_OPTION = {
  required: '필수 응답 항목입니다.',
  minLength: {
    value: 5,
    message: '제목은 5자 이상이어야 합니다.',
  },
  maxLength: {
    value: 30,
    message: '제목은 30자 이하여야 합니다',
  },
};

export const CONTENT_VALIDATION_OPTION = {
  required: '필수 응답 항목입니다.',
  minLength: {
    value: 10,
    message: '본문은 10자 이상이어야 합니다.',
  },
  maxLength: {
    value: 500,
    message: '본문은 500자 이하여야 합니다.',
  },
};

export const IMAGES_VALIDATION_OPTION = {
  required: '필수 응답 항목입니다.',
  maxLength: {
    value: 5,
    message: '이미지 첨부는 5개까지 가능합니다.',
  },
};

export const BUY_NOW_VALIDATION_OPTION = {
  required: '필수 응답 항목입니다.',
  minLength: {
    value: 6,
    message: '최소 즉시 판매가는 1000원입니다',
  },
  pattern: {
    value: /\d{1,3}(,\d{3})*원/,
    message: '금액 형식이 아닙니다',
  },
};
