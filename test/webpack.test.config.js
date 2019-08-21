const TerserPlugin = require('terser-webpack-plugin');

module.exports = () => {
    return {
        entry: {
            'main': './test/index.ts',
        },
        output: {
            path: __dirname,
            filename: 'life.test.js',
        },
        mode: "development",
        optimization: {
            minimizer: [new TerserPlugin({
                cache: true,
                parallel: true,
            })],
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: 'ts-loader',
                        }
                    ]
                },
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.json', '.tsx', '.ts'],
        }
    };
};
