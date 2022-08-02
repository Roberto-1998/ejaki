import * as yup from 'yup'

export const descriptionSchema=yup.object().shape({
    about:yup.string().required('Must provide a description'),
    categories:yup.array().min(1, 'Must provide at least one category'),
    labels:yup.array().min(1, 'Must provide at least one label')
})