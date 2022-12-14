export type RegisterFormData = {
  id: string;
  email: string;
  emailVerifyNum: string;
  password: string;
  passwordValidate: string;
  sex: {
    label: '남' | '여';
    value: 'male' | 'female';
  };
  birth: string;
  address: string;
};

export type PostSignUpUser = Pick<RegisterFormData, 'address' | 'email' | 'password' | 'birth'> & {
  nickName: string;
  gender: 'M' | 'F';
};
