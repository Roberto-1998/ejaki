import * as yup from 'yup';

const name = yup.string()
    .required('Requerido')
    .min(2, 'El nombre debe tener al menos 2 caracteres');

const domain = yup.string()
    .required('Requerido')
    .min(2, 'El dominio debe tener al menos 2 caracteres')
    .test('not-valid', 'El dominio no es correcto', (value: any) => {
        return value && value.match(/^[A-Za-z_-]*$/);
    });

const currency = yup.string();

const visibility = yup.string();

const formSchema = yup.object().shape({name, domain, currency, visibility});

export default formSchema;