import {register, init} from 'svelte-i18n'

// asynchronous loading https://github.com/kaisermann/svelte-i18n/wiki#22-asynchronous
register('en', () => import('../../locales/en'));
register('de', () => import('../../locales/de'));
register('fr', () => import('../../locales/fr'));
register('it', () => import('../../locales/it'));
register('sk', () => import('../../locales/sk'));
register('ru', () => import('../../locales/ru'));
register('cz', () => import('../../locales/cz'));
register('bg', () => import('../../locales/bg'));
register('pl', () => import('../../locales/pl'));
register('nl', () => import('../../locales/nl'));
register('es', () => import('../../locales/es'));
register('ja', () => import('../../locales/ja'));
register('da', () => import('../../locales/da'));
register('el', () => import('../../locales/el'));
register('et', () => import('../../locales/et'));
register('hu', () => import('../../locales/hu'));
register('lt', () => import('../../locales/lt'));
register('lv', () => import('../../locales/lv'));
register('ro', () => import('../../locales/ro'));
register('sl', () => import('../../locales/sl'));
register('zh', () => import('../../locales/zh'));


init({
    fallbackLocale: 'en',
    // initialLocale: {
    //     navigator: true,
    // },
    initialLocale: 'en'
});
// locale.set('en');
// [lang].initialLocale = 'en';
