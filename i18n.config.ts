
import en from './locales/en.json'
import fr from './locales/fr.json'

export default defineI18nConfig(() => ({
    locale: 'en',
    messages: { en, fr }
}))