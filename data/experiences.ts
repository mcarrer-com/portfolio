export default (t: (key: string) => string): Experience[] => [
    {
        dateIn: '2022',
        dateOut: '2024',
        roles: [
            t('experiences.roles.full-stack-developer')
        ],
        company: t('experiences.personal-project'),
        summary: t('experiences.summary.perso'),
        tags: ['Nuxt 3', 'Vuejs', 'Javascript', 'Typescript', 'SCSS', 'Python', 'PostgreSQL', 'Git', 'Virtualisation', 'Docker']
    },
    {
        dateIn: '2014',
        dateOut: '2021',
        roles: [
            t('experiences.roles.it-department-manager'),
            t('experiences.roles.full-stack-developer'),
            t('experiences.roles.software-developer')
        ],
        company: 'Electrical Design, 69680 Chassieu',
        summary: t('experiences.summary.ed'),
        tags: ['J2EE', 'Java', 'JSP', 'HTML', 'CSS', 'Javascript', 'Maven', 'Hibernate', 'SQL', 'C#', 'WPF', 'VBScript', 'Git', 'SVN', 'Virtualisation', 'Docker']
    },
    {
        dateIn: '2011',
        dateOut: '2012',
        roles: [
            t('experiences.roles.software-developer')
        ],
        company: 'ABW Concept, 74460 Marnaz',
        summary: t('experiences.summary.abw'),
        tags: ['VB.Net', 'SQL']
    }
]