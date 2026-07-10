const menuButton = document.querySelector('.menu-button');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
const magneticItems = document.querySelectorAll('.magnetic');
const languageButtons = document.querySelectorAll('[data-language-toggle]');

const translations = {
  en: {
    'nav.services': 'Services',
    'nav.benefits': 'Benefits',
    'nav.process': 'Process',
    'nav.formats': 'Formats',
    'nav.contacts': 'Contacts',
    'stripBots': 'Telegram bots',
    'stripWebsites': 'Websites',
    'stripGrowth': 'Telegram growth',
    'stripBanners': 'Banners',
    'cta.discuss': 'Discuss a project',
    'cta.messageHandle': 'Message @ZarkonAI',
    'cta.viewServices': 'View services',
    'cta.consultation': 'Get a consultation',
    'cta.write': 'Message',
    'cta.backServices': 'Back to services',
    'hero.eyebrow': 'Digital · Automate · Grow',
    'hero.title': 'I build Telegram bots, websites and digital design <span>with a wow effect</span>',
    'hero.text': 'Modern solutions for business and personal brands: Telegram bots, landing pages and websites, Telegram growth and banners — in one polished visual system.',
    'services.kicker': 'Services',
    'services.title': 'Solutions that help you look stronger and get requests',
    'services.text': 'Order one service or build a full system: website + Telegram bot + visuals + promotion.',
    'service.bot.title': 'Telegram bots',
    'service.bot.text': 'Bots for requests, bookings, consultations, notifications, giveaways, payments and routine automation.',
    'service.bot.li1': 'Buttons, menus and user scenarios',
    'service.bot.li2': 'Requests to Telegram or a table',
    'service.bot.li3': 'Database, admin panel and integrations',
    'service.site.title': 'Websites and landing pages',
    'service.site.text': 'Modern websites for services, personal brands, product launches, portfolios or quick idea testing.',
    'service.site.li1': 'Conversion-focused structure',
    'service.site.li2': 'Adaptive layout for phone and desktop',
    'service.site.li3': 'Forms, contact buttons and analytics',
    'service.growth.title': 'Telegram growth',
    'service.growth.text': 'Channel packaging, content logic, ad creatives and a basic audience growth plan.',
    'service.growth.li1': 'Channel audit and visual packaging',
    'service.growth.li2': 'Content plan and recurring sections',
    'service.growth.li3': 'Ad creatives',
    'service.growth.li4': 'Growth toward 5–10K target-audience subscribers',
    'service.banner.title': 'Banners',
    'service.banner.text': 'Visuals for Telegram, websites, ads, presentations and promotional posts in one style.',
    'service.banner.li1': 'Post banners',
    'service.banner.li2': 'Avatars, covers and cards',
    'service.banner.li3': 'Advertising images',
    'why.kicker': 'Why NeXR',
    'why.title': 'Not just “make it look nice”, but build a working digital system',
    'why.text': 'I look at a project as a system: visuals, structure, user flow, contact buttons and a clear result. This way a website, bot or banner works together instead of looking fragmented.',
    'why.design.title': 'Modern design',
    'why.design.text': 'Dark premium-tech style, clean typography, contrast and visual depth.',
    'why.automation.title': 'Automation',
    'why.automation.text': 'Bots and integrations save time, accept requests and unload repetitive actions.',
    'why.result.title': 'Focus on results',
    'why.result.text': 'Every block leads to action: message, leave a request, choose a service or go to Telegram.',
    'why.style.title': 'Unified style',
    'why.style.text': 'Website, bot, banners and Telegram packaging look like one system, not random elements.',
    'process.kicker': 'Process',
    'process.title': 'A clear path from idea to launch',
    'process.text': 'No unnecessary theory: first we define the task, then build structure, design, development and launch.',
    'process.step1.title': 'Brief',
    'process.step1.text': 'We discuss the niche, goal, audience, references and desired result.',
    'process.step2.title': 'Concept',
    'process.step2.text': 'We think through the website structure, bot scenario or visual style.',
    'process.step3.title': 'Development',
    'process.step3.text': 'I build the design, layout, logic, buttons, forms and integrations.',
    'process.step4.title': 'Launch',
    'process.step4.text': 'We check everything on mobile and desktop, fix details and prepare for use.',
    'examples.kicker': 'What we can build',
    'examples.title': 'Ready-to-build formats for different tasks',
    'examples.text': 'These are practical directions that can be quickly adapted for your niche, product, channel or personal brand.',
    'examples.bot.tag': 'Telegram bot',
    'examples.bot.title': 'Request and consultation bot',
    'examples.bot.text': 'The client chooses a service, answers questions, and the request comes to your Telegram.',
    'examples.landing.tag': 'Website',
    'examples.landing.title': 'Service landing page',
    'examples.landing.text': 'A compact sales page with an offer, benefits, structure and a contact button.',
    'examples.channel.tag': 'Growth',
    'examples.channel.title': 'Telegram channel packaging',
    'examples.channel.text': 'Avatar, description, pinned post, sections, banners and clear promotion logic.',
    'formats.kicker': 'Formats',
    'formats.title': 'Start small and expand the project step by step',
    'formats.text': 'The final cost is discussed in direct messages after we understand the task, scope and launch format.',
    'formats.popular': 'Optimal',
    'format.price.dm': 'Discussed in DM',
    'format.start.title': 'Start',
    'format.start.text': 'For quickly testing an idea, a simple landing page, banner or basic bot.',
    'format.start.li1': 'Basic structure',
    'format.start.li2': 'Clean design',
    'format.start.li3': 'Contact buttons',
    'format.bundle.title': 'Bundle',
    'format.bundle.text': 'When you need a website, Telegram bot, visual packaging and a clear user path.',
    'format.bundle.li1': 'Website + Telegram',
    'format.bundle.li2': 'Banners and visuals',
    'format.bundle.li3': 'Request logic',
    'format.turnkey.title': 'Turnkey',
    'format.turnkey.text': 'For projects where the full system must be built: from idea and packaging to launch.',
    'format.turnkey.li1': 'Concept and structure',
    'format.turnkey.li2': 'Development and design',
    'format.turnkey.li3': 'Support after launch',
    'contact.kicker': 'Request',
    'contact.title': 'Ready to take your project to the next level?',
    'contact.text': 'Message me what you need: bot, website, promotion, banners or everything together. We’ll review the task and choose the best launch format.',
    'footer.text': 'Digital solutions with a wow effect: bots, websites, growth and banners.',
    'footer.contact': 'Contact',
    'footer.ready': 'Ready for new projects',
    'footer.rights': '© 2026 NeXR. All rights reserved.',
    'footer.top': 'Back to top ↑'
  },
  ru: {
    'nav.services': 'Услуги',
    'nav.benefits': 'Преимущества',
    'nav.process': 'Процесс',
    'nav.formats': 'Форматы',
    'nav.contacts': 'Контакты',
    'stripBots': 'Telegram-боты',
    'stripWebsites': 'Сайты',
    'stripGrowth': 'Продвижение в Telegram',
    'stripBanners': 'Баннеры',
    'cta.discuss': 'Обсудить проект',
    'cta.messageHandle': 'Написать @ZarkonAI',
    'cta.viewServices': 'Смотреть услуги',
    'cta.consultation': 'Получить консультацию',
    'cta.write': 'Написать',
    'cta.backServices': 'Вернуться к услугам',
    'hero.eyebrow': 'Digital · Automate · Grow',
    'hero.title': 'Создаю Telegram-ботов, сайты и digital-дизайн <span>с вау-эффектом</span>',
    'hero.text': 'Современные решения для бизнеса и личного бренда: Telegram-боты, лендинги и сайты, продвижение в Telegram и баннеры — в едином стильном визуале.',
    'services.kicker': 'Услуги',
    'services.title': 'Решения, которые помогают выглядеть сильнее и получать заявки',
    'services.text': 'Можно заказать одну услугу или собрать связку: сайт + Telegram-бот + оформление + продвижение.',
    'service.bot.title': 'Telegram-боты',
    'service.bot.text': 'Боты для заявок, записи, консультаций, уведомлений, розыгрышей, оплат и автоматизации рутины.',
    'service.bot.li1': 'Кнопки, меню и сценарии',
    'service.bot.li2': 'Заявки в Telegram или таблицу',
    'service.bot.li3': 'База данных, админка, интеграции',
    'service.site.title': 'Сайты и лендинги',
    'service.site.text': 'Современные сайты под услуги, личный бренд, запуск продукта, портфолио или быстрый тест идеи.',
    'service.site.li1': 'Структура под конверсию',
    'service.site.li2': 'Адаптив под телефон и ПК',
    'service.site.li3': 'Формы, кнопки связи и аналитика',
    'service.growth.title': 'Продвижение в Telegram',
    'service.growth.text': 'Упаковка канала, контентная логика, рекламные креативы и базовый план роста аудитории.',
    'service.growth.li1': 'Аудит и оформление канала',
    'service.growth.li2': 'Контент-план и рубрики',
    'service.growth.li3': 'Креативы для рекламы',
    'service.growth.li4': 'Доводим проект до 5–10К ЦА',
    'service.banner.title': 'Баннеры',
    'service.banner.text': 'Визуалы для Telegram, сайтов, объявлений, презентаций и рекламных постов в едином стиле.',
    'service.banner.li1': 'Баннеры для постов',
    'service.banner.li2': 'Аватары, обложки, карточки',
    'service.banner.li3': 'Рекламные изображения',
    'why.kicker': 'Почему NeXR',
    'why.title': 'Не просто «сделать красиво», а собрать рабочую digital-систему',
    'why.text': 'Я смотрю на проект как на связку: визуал, структура, сценарий пользователя, кнопки связи и понятный результат. Поэтому сайт, бот или баннер работают вместе, а не выглядят разрозненно.',
    'why.design.title': 'Современный дизайн',
    'why.design.text': 'Тёмный premium-tech стиль, аккуратная типографика, контраст и визуальная глубина.',
    'why.automation.title': 'Автоматизация',
    'why.automation.text': 'Боты и интеграции экономят время, принимают заявки и разгружают повторяющиеся действия.',
    'why.result.title': 'Фокус на результате',
    'why.result.text': 'Каждый блок ведёт к действию: написать, оставить заявку, выбрать услугу, перейти в Telegram.',
    'why.style.title': 'Единый стиль',
    'why.style.text': 'Сайт, бот, баннеры и Telegram-упаковка выглядят как одна система, а не набор случайных элементов.',
    'process.kicker': 'Процесс',
    'process.title': 'Прозрачный путь от идеи до запуска',
    'process.text': 'Без лишней теории: сначала фиксируем задачу, затем собираем структуру, делаем дизайн, разработку и запуск.',
    'process.step1.title': 'Бриф',
    'process.step1.text': 'Обсуждаем нишу, цель, аудиторию, примеры и желаемый результат.',
    'process.step2.title': 'Концепция',
    'process.step2.text': 'Продумываем структуру сайта, сценарий бота или стиль визуалов.',
    'process.step3.title': 'Разработка',
    'process.step3.text': 'Собираю дизайн, верстку, логику, кнопки, формы и интеграции.',
    'process.step4.title': 'Запуск',
    'process.step4.text': 'Проверяем на телефоне и ПК, исправляем мелочи и готовим к использованию.',
    'examples.kicker': 'Что можно собрать',
    'examples.title': 'Готовые форматы под разные задачи',
    'examples.text': 'Это практичные направления, которые можно быстро адаптировать под вашу нишу, продукт, канал или личный бренд.',
    'examples.bot.tag': 'Telegram-бот',
    'examples.bot.title': 'Бот для заявок и консультаций',
    'examples.bot.text': 'Клиент выбирает услугу, отвечает на вопросы, а заявка приходит вам в Telegram.',
    'examples.landing.tag': 'Сайт',
    'examples.landing.title': 'Лендинг под услугу',
    'examples.landing.text': 'Короткая продающая страница с оффером, преимуществами, структурой и кнопкой связи.',
    'examples.channel.tag': 'Продвижение',
    'examples.channel.title': 'Упаковка Telegram-канала',
    'examples.channel.text': 'Аватар, описание, закреп, рубрики, баннеры и понятная логика продвижения.',
    'formats.kicker': 'Форматы',
    'formats.title': 'Можно начать с малого и постепенно расширять проект',
    'formats.text': 'Финальную стоимость обсуждаем в ЛС после понимания задачи, объёма работы и формата запуска.',
    'formats.popular': 'Оптимально',
    'format.price.dm': 'Обсуждаем в ЛС',
    'format.start.title': 'Старт',
    'format.start.text': 'Для быстрой проверки идеи, простого лендинга, баннера или базового бота.',
    'format.start.li1': 'Базовая структура',
    'format.start.li2': 'Аккуратный дизайн',
    'format.start.li3': 'Кнопки связи',
    'format.bundle.title': 'Связка',
    'format.bundle.text': 'Когда нужен сайт, Telegram-бот, оформление и понятный путь пользователя.',
    'format.bundle.li1': 'Сайт + Telegram',
    'format.bundle.li2': 'Баннеры и визуал',
    'format.bundle.li3': 'Логика заявок',
    'format.turnkey.title': 'Под ключ',
    'format.turnkey.text': 'Для проекта, где нужно собрать систему: от идеи и упаковки до запуска.',
    'format.turnkey.li1': 'Концепция и структура',
    'format.turnkey.li2': 'Разработка и дизайн',
    'format.turnkey.li3': 'Поддержка после запуска',
    'contact.kicker': 'Заявка',
    'contact.title': 'Готовы вывести проект на новый уровень?',
    'contact.text': 'Напишите, что нужно сделать: бот, сайт, продвижение, баннеры или всё вместе. Посмотрим задачу и выберем лучший формат запуска.',
    'footer.text': 'Digital-решения с вау-эффектом: боты, сайты, продвижение и баннеры.',
    'footer.contact': 'Связь',
    'footer.ready': 'Готов к новым проектам',
    'footer.rights': '© 2026 NeXR. Все права защищены.',
    'footer.top': 'Наверх ↑'
  }
};

let currentLanguage = 'en';

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[language]?.[key];
    if (value) element.innerHTML = value;
  });

  languageButtons.forEach((button) => {
    button.textContent = language === 'en' ? 'RU' : 'EN';
    button.setAttribute('aria-label', language === 'en' ? 'Switch to Russian' : 'Switch to English');
  });
}

menuButton?.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(currentLanguage === 'en' ? 'ru' : 'en');
  });
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

magneticItems.forEach((item) => {
  item.addEventListener('mousemove', (event) => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    item.style.transform = `translate(${x * 0.06}px, ${y * 0.10}px)`;
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = '';
  });
});

// Надёжная прокрутка по якорям: логотип NeXR и кнопка «Наверх» всегда возвращают к началу страницы.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;

    const targetId = href.slice(1);
    const target = document.getElementById(targetId);
    if (!target && targetId !== 'top') return;

    event.preventDefault();
    document.body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');

    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, '', window.location.pathname + window.location.search);
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${targetId}`);
  });
});

applyLanguage('en');
