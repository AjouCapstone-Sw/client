export const PASSWORD_VALIDATION_OPTION = {
  required: '필수 응답 항목입니다.',
  minLength: {
    value: 8,
    message: '비밀번호는 8자 이상이어야 합니다',
  },
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message: '한 개 이상의 문자와 숫자로 구성해 주세요',
  },
};
