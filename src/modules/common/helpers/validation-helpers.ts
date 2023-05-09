import * as Yup from 'yup';

export const REQUIRED_FIELD_MESSAGE = 'This is a required field.';

export const required = (requiredMessagge = REQUIRED_FIELD_MESSAGE) =>
    Yup.string().trim().required(requiredMessagge);

export const minLength = (min = 3, minLengthMessagge = `This must be at least ${min} characters long.`) =>
    Yup.string().trim().min(min, minLengthMessagge);

export const maxLength = (max = 20, maxLengthMessagge = `This must be less than ${max} characters.`) =>
    Yup.string().max(max, maxLengthMessagge);

const validate = async (schema: any, value: any) =>
    schema
        .validate(value)
        .then(() => undefined)
        .catch((e: any) => e.message);

export const schemaValidate = (schemas: any) => async (value: any) => {
    if (schemas && schemas.length > 0) {
        let schemaCompose = Yup.mixed();
        schemas.forEach((sch: any) => {
            schemaCompose = schemaCompose.concat(sch);
        });
        return validate(schemaCompose, value);
    }
    return validate(schemas, value);
};