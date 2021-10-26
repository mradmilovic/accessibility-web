
module.exports = (phase, defaultConfig) => {
    return {
        ...defaultConfig,
        // productionBrowserSourceMaps: true, 
    
        webpack: (config) => {
            config.module.rules.push({
                test: /\.svg/,
                issuer: /\.(j|t)sx?$/,
                use: ['@svgr/webpack'],
            })

            return config
        },
      
    };
    
};
