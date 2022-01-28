import * as Yup from 'yup'

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .required('O usuário deve ser preechido')
})