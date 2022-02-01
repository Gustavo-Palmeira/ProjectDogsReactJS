import * as Yup from 'yup'

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'A senha deve conter ao menos 6 caracteres')
    .required('A senha deve ser preechida')
})