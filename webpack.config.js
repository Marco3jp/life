const TerserPlugin = require('terser-webpack-plugin');

const isDev = true;

module.exports = () => {
    return {
        entry: {
            'main': './index.ts',
        },
        output: {
            path: __dirname,
            filename: 'life.js',
        },
        mode: isDev ? "development" : "production",
        optimization: {
            minimizer: [new TerserPlugin({
                cache: true,
                parallel: true,
                terserOptions: {
                    compress: {
                        drop_console: true,
                    }
                }
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
