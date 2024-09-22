import { t, initLanguage } from './translations.js'

initLanguage();
// t fonksiyonunu global hale getirir.
// Bu tanımı yapmazsam 'Uncaught ReferenceError: t is not defined' hatası alıyorum.
window.t = t;