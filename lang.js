
const translations = {
    'en': {
        title: '$ZSUP — Meme Token of Ukraine’s Defenders',
        desc: 'Born from the spirit of resistance. Support the initiative and become part of our crypto-army.',
        buy: 'Buy on Pump.fun'
    },
    'uk': {
        title: '$ZSUP — МЕМ-Токен Захисників України',
        desc: 'Народжений із духу опору. Підтримай ініціативу та стань частиною нашої крипто-армії.',
        buy: 'Купити на Pump.fun'
    }
};

function switchLang() {
    const currentLang = document.documentElement.lang === 'uk' ? 'en' : 'uk';
    setLang(currentLang);
}

function setLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

window.onload = () => {
    const userLang = navigator.language.startsWith('uk') ? 'uk' : 'en';
    setLang(userLang);
};
