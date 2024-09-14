/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    entry: './src/index.ts',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
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
                type: 'asset/resource',
            },
        ],
    },
};
