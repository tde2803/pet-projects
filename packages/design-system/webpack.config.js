const path = require('path');

module.exports = function (env, argv) {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.ts',
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            libraryTarget: 'umd',
        },
        watch: !isProduction,
        watchOptions: {
            ignored: ['node_modules', 'dist'],
        },
        mode: isProduction ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: [/node_modules/, /\.stories\.tsx$/, /\.test\.(ts|tsx)$/],
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                import: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.woff2$/,
                    use: 'url-loader',
                },
            ],
        },
    };
};
