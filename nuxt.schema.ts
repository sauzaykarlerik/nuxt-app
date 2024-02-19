import { NuxtAwesomeAppConfig } from './app.config'

export default defineNuxtSchema({
  appConfig: {
    awesome: {
      name: 'Vue and Nuxt Laboratory',
      description:
        'a starter template for Nuxt 3 with minimalist themes design, built in components, drawer & menus, and more.',
      project: {
        links: {
          github: '',
        },
      },
      layout: {
        page: {
          navbar: {
            menus: [],
          },
        },
        footer: {
          year: 2023,
        },
        welcome: {
          title: 'Vue&nbsp;&&nbsp;Nuxt&nbsp; Playground Laboratory',
          disableInfoReplaceIndexInWelcomePage: true,
        },
      },
      author: {
        name: '',
        links: {
          github: '',
          medium: '',
          website: '',
        },
      },
    } as NuxtAwesomeAppConfig,
  },
})
