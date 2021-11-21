import { src, dest } from 'gulp';
import webpack from 'webpack-stream';
import TerserPlugin from 'terser-webpack-plugin';
import browserSync from 'browser-sync';

function modules() {
    return src('src/js/index.js')
        .pipe(webpack({
            optimization: {
                minimize: true,
                minimizer: [
                    new TerserPlugin({
                        extractComments: false,
                    }),
                ],
            },
            mode: 'production',
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    }
                ]
            },
            output: {
                filename: 'bundle.min.js',
            },
        }))
        .pipe(dest('build/js'))
        .pipe(browserSync.stream())
}

export default modules;


