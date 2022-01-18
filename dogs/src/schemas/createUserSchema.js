import * as Yup from 'yup'

export const createUserSchema = Yup.object().shape({
  username: Yup.string()
    .required('O usuário deve ser preechido'),
  email: Yup.string()
    .email('O e-mail deve ser válido')
    .required('O e-mail deve ser preechido'),
  password: Yup.string()
    .min(6, 'A senha deve conter ao menos 6 caracteres')
    .required('A senha deve ser preechida')
})