import * as Yup from 'yup'

export const postPhotoCommentSchema = Yup.object().shape({
  comment: Yup.string()
    .min('2', 'O comentário deve ter ao menos 2 caracteres')
    .required('O comentário deve ser preenchido'),
})