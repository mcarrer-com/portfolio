export default (translate: (key: string) => string): Experience[] => [
    {
        dateIn: '2022',
        dateOut: '2023',
        roles: [
            translate('experiences.roles.full-stack-developer')
        ],
        company: translate('experiences.personal-project'),
        summary: translate('experiences.summary.perso'),
        tags: ['Nuxt', 'Vuejs', 'Javascript', 'Typescript', 'SCSS', 'Python', 'PostgreSQL']
    },
    {
        dateIn: '2014',
        dateOut: '2021',
        roles: [
            translate('experiences.roles.it-department-manager'),
            translate('experiences.roles.full-stack-developer'),
            translate('experiences.roles.software-developer')
        ],
        company: 'Electrical Design',
        summary: translate('experiences.summary.ed'),
        tags: ['J2EE', 'Java', 'JSP', 'Maven', 'Hibernate', 'SQL', 'C#', 'WPF', 'VBScript']
    },
    {
        dateIn: '2011',
        dateOut: '2012',
        roles: [
            translate('experiences.roles.software-developer')
        ],
        company: 'ABW Concept',
        summary: translate('experiences.summary.abw'),
        tags: ['VB.Net', 'SQL']
    }
]