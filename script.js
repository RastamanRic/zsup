const content = {
  uk: {
    slogan: "Токен, що пампить дух і ринок 🇺🇦🚀",
    aboutTitle: "Про токен",
    aboutText: "$ZSUP — це мем-токен, натхненний Збройними Силами України та духом перемоги. Ми не обіцяємо прибутків — ми пампимо по фану. Ліквідність заблокована, смартконтракт чесний, а спільнота — залізна!",
    faqTitle: "FAQ",
    faqText: "<strong>Що таке $ZSUP?</strong><br>Це не просто токен — це хвиля пампу. Купуєш — пампиш. Тримаєш — герой. Продаєш — як знаєш... 😉",
    communityTitle: "Спільнота",
    communityText: "Приєднуйся до наших соцмереж, ділись мемами, запускай челенджі! Разом ми пампнемо до місяця!"
  },
  en: {
    slogan: "The token that pumps both spirit and market 🇺🇦🚀",
    aboutTitle: "About the Token",
    aboutText: "$ZSUP is a meme token inspired by the Armed Forces of Ukraine and the spirit of victory. We don’t promise profits — we pump for fun. Liquidity is locked, the contract is fair, and the community is solid!",
    faqTitle: "FAQ",
    faqText: "<strong>What is $ZSUP?</strong><br>It’s not just a token — it’s a pump wave. You buy — you pump. You hold — you’re a hero. You sell — well, your choice... 😉",
    communityTitle: "Community",
    communityText: "Join our socials, share memes, launch challenges! Together, we’ll pump to the moon!"
  }
};

function switchLang(lang) {
  document.getElementById("slogan").innerHTML = content[lang].slogan;
  document.getElementById("about-title").innerText = content[lang].aboutTitle;
  document.getElementById("about-text").innerText = content[lang].aboutText;
  document.getElementById("faq-title").innerText = content[lang].faqTitle;
  document.getElementById("faq-text").innerHTML = content[lang].faqText;
  document.getElementById("community-title").innerText = content[lang].communityTitle;
  document.getElementById("community-text").innerText = content[lang].communityText;
}
