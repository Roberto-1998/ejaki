import * as Yup from 'yup'

export const descriptionSchema=Yup.object().shape({
    about:Yup.string().required('Must provide a description'),
    categories:Yup.array().min(1, 'Must provide at least one category'),
    labels:Yup.array().min(1, 'Must provide at least one label')
})