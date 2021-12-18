import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  username: Yup.string()
    .required('O usuário deve ser preechido'),
  password: Yup.string()
    .required('A senha deve ser preechida')
})