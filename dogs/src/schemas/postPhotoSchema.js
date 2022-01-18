import * as Yup from 'yup'

export const postPhotoSchema = Yup.object().shape({
  name: Yup.string()
    .required('O nome deve ser preechido'),
  weight: Yup.string()
    .matches(/^\d+$/, 'O peso deve ser um número')
    .required('O peso deve ser preechido'),
  age: Yup.string()
    .matches(/^\d+$/, 'A idade deve ser um número')
    .required('A idade deve ser preechida'),
  img: Yup.mixed()
    .required('Selecione um arquivo válido')
})