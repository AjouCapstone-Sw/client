const REGISTER_SEX_OPTION = [
  { value: 'male', label: '남' },
  { value: 'female', label: '여' },
];

const ID_VALIDATION_OPTION = { required: '필수 응답 항목입니다.' };

const PASSWORD_VALIDATION_OPTION = {
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

const EMAIL_VALIDATION_OPTION = {
  required: '필수 응답 항목입니다.',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
    message: '이메일 형식이 아닙니다.',
  },
};

const EMAIL_VERIFY_VALIDATION_OPTION = {
  required: '필수 응답 항목입니다.',
  minLength: {
    value: 4,
    message: '인증번호를 확인해 주세요',
  },
};
export default {
  REGISTER_SEX_OPTION,
  ID_VALIDATION_OPTION,
  PASSWORD_VALIDATION_OPTION,
  EMAIL_VALIDATION_OPTION,
  EMAIL_VERIFY_VALIDATION_OPTION,
};
