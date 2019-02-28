const seed = {};

const Frameworks = [{
        name: 'Angular',
        type: 'front_end',
        platform: 'web'
    },
    {
        name: 'Vuejs',
        type: 'front_end',
        platform: 'web'
    },
    {
        name: 'Reactjs',
        type: 'front_end',
        platform: 'web'
    },
    {
        name: 'Node.js',
        type: 'back_end',
        platform: 'web'
    },
    {
        name: 'Django',
        type: 'back_end',
        platform: 'web'
    },
    {
        name: 'Flask',
        type: 'back_end',
        platform: 'web'
    },
    {
        name: 'Spring',
        type: 'back_end',
        platform: 'web'
    },
    {
        name: 'Flutter',
        type: 'cross_platform',
        platform: 'mobile'
    },
    {
        name: 'React Native',
        type: 'cross_platform',
        platform: 'mobile'
    },
    {
        name: 'NativeScript',
        type: 'cross_platform',
        platform: 'mobile'
    },
    {
        name: 'Android/iOS',
        type: 'native',
        platform: 'mobile'
    },
    {
        name: 'Electronjs',
        type: 'cross_platform',
        platform: 'desktop'
    },
    {
        name: 'Meteorjs',
        type: 'cross_platform',
        platform: 'desktop'
    }
];

const Databases = [{
        name: 'MongoDb',
        type: 'NoSQL'
    },
    {
        name: 'Cassandra',
        type: 'NoSQL'
    },
    {
        name: 'Redis',
        type: 'NoSQL'
    },
    {
        name: 'PostgreSQL',
        type: 'SQL'
    },
    {
        name: 'MySQL',
        type: 'SQL'
    },
    {
        name: 'Oracle',
        type: 'SQL'
    },
    {
        name: 'MSSQL',
        type: 'SQL'
    }
];

seed.Databases = Databases;
seed.Frameworks = Frameworks;

module.exports = seed;