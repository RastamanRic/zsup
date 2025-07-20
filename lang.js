
const translations = {
    ua: {
        about: "Про нас",
        tokenomics: "Токеноміка",
        roadmap: "Дорожня карта",
        faq: "Питання",
        slogan: "Найпатріотичніший мем-токен на Solana!",
        buy: "КУПИТИ НА PUMP.FUN",
        description: "ZSU PUMP (ZSUP) — це солдат на ракеті з котом у балаклаві та прапором! Хто тримає — повага. Хто продає — слава."
    }
};
document.addEventListener("DOMContentLoaded", () => {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith("uk")) {
        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.getAttribute("data-key");
            if (translations.ua[key]) {
                el.textContent = translations.ua[key];
            }
        });
    }
});
