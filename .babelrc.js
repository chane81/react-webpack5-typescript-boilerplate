module.exports = (api) => {
    const mode = process.env.NODE_ENV ?? 'production';

    // cache
    api.cache.using(() => mode);

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        browsers: ['>1%', 'last 4 versions', 'not ie < 9'],
                    },

                    // // modules를 false로 해야 최신모듈 시스템이 그대로 유지되어서 트리 쉐이킹이 된다.
                    // // ES2015 모듈 시스템에서 import되지 않은 export들을 정리해주는 기능
                    // // 용량이 많이 줄어들기 때문에 꼭 트리 쉐이킹을 사용
                    // // commonJS나 AMD, UMD같은 모듈 시스템을 사용해야하는 클라이언트에서는 쓰면 제대로 처리되지 않음
                    // modules: false,

                    useBuiltIns: 'usage',
                    debug: false,
                    corejs: 3,
                },
            ],
            '@babel/preset-react',
        ],
        plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-proposal-object-rest-spread',
            // Applies the react-refresh Babel plugin on non-production modes only
            mode !== 'production' && 'react-refresh/babel',
        ].filter(Boolean),
    };
};
