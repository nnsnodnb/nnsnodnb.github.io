import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import ja from '../locales/ja.json'

const messages = {
    en: en,
    ja: ja,
}

const language = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language
const locale = language.split('-')[0]

const i18n = createI18n({
    locale: locale,
    fallbackLocale: 'en',
    messages: messages,
})

export default i18n
