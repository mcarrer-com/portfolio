import * as validators from '@vuelidate/validators';

export const useValidators = () => {
    const i18n = useI18n();

    const withI18nMessage = validators.createI18nMessage({ t: i18n.t.bind(i18n) });

    const required = withI18nMessage(validators.required);
    const email = withI18nMessage(validators.email);

    return {
        required,
        email
    };
};