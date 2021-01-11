export default {
  widgets: [
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
                  buildHookId: '5ffc5f17349da7d39b1d05ad',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kfowaer4',
                  apiId: 'ea76f22f-8518-4694-864b-4fdfdda51641'
                },
                {
                  buildHookId: '5ffc5f173b9046222d7818f1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-aa2e7um1',
                  apiId: '211abb21-d434-4c5e-8d30-8606f3c4e707'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonasersland/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-aa2e7um1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
