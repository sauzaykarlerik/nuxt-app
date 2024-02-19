import type { AppConfigInput } from 'nuxt/schema'

export default defineAppConfig({
  awesome: {
    name: 'Vue & Nuxt Laboratory',
    description: 'A project to try things and play with Vue and Nuxt',
    project: {
      links: {
        github: '',
      },
    },
    layout: {
      page: {
        navbar: {
          menus: [
            { type: 'link', title: 'Playground', to: { name: 'playground' } },
            { type: 'link', title: 'Post', to: { name: 'post' } },
            { type: 'link', title: 'Store', to: { name: 'store' } },
            {
              type: 'dropdown',
              title: 'Documentations',
              children: [
                {
                  type: 'link',
                  title: 'Components',
                  to: { name: 'docs-components' },
                },
              ],
            },
            { type: 'button', title: 'Setting', to: { name: 'setting' } },
            // dynamic title
            // {
            //   type: 'button',
            //   title: (nuxt) =>
            //     (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            //   to: (nuxt) => (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            // },
          ],
        },
      },
      footer: {
        year: new Date().getFullYear(),
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
  },
})
