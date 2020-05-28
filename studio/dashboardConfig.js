export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ecf1468a6566f1782332919',
                  title: 'Sanity Studio',
                  name: 'Middlesex-Painters-studio',
                  apiId: 'c134c993-17ba-498a-bea8-d61705e192f2'
                },
                {
                  buildHookId: '5ecf1468d5b1e903bb1e6adc',
                  title: 'Landing pages Website',
                  name: 'Middlesex-Painters',
                  apiId: '5679e5b9-4277-4c51-815b-16b558d2e13b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/musy1/Middlesex-Painters',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Middlesex-Painters.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
