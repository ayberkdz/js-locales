
function updateContent(translations) {
    for(const key in translations) {
        const el = document.getElementById(key);
        if(el) {
            el.textContent = translations[key];
        }
    }
}

export async function t(language) {
    try {
        const response = await fetch(`./locales/${language}/common.json`);
        if (!response.ok) {
            throw new Error('Dil dosyası yüklenirken hata oluştu!');
        }
        const translations = await response.json();
        updateContent(translations);
        

        localStorage.setItem('locale', language);
    } catch (error) {
        console.error(error);
    }
}

export function initLanguage() {
    const savedLanguage = localStorage.getItem('locale');
    const languageSelect = document.getElementById('language-select');

    if (savedLanguage) {
        languageSelect.value = savedLanguage;
        t(savedLanguage);
    } else {
        languageSelect.value = 'en';
        t('en');
    }
}