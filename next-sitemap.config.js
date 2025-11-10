module.exports = {
    siteUrl: 'https://tjampens.dev',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.7,
    additionalPaths: async (config) => [
        await config.transform(config, '/fr'),
        await config.transform(config, '/en'),
        await config.transform(config, '/fr/about'),
        await config.transform(config, '//en/about'),
    ],
};
