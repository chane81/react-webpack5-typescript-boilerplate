import path from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
const rootDir = path.resolve();

const isDev = process.env.NODE_ENV !== 'production';

const config = {
  target: isDev ? 'web' : ['web', 'es5'],
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'cheap-module-source-map' : 'source-map',
  entry: {
    main: path.resolve('src', 'index.tsx')
  },
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: isDev ? '[name].[fullhash].js' : '[name].[contenthash].js',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // 기존 file-loader, url-loader, raw-loader 는 아래로 대체됨
      // asset/resource (file-loader), asset/inline (url-loader), asset/source (raw-loader), asset - automatically chooses
      // 참고 url: https://webpack.js.org/guides/asset-modules/
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve('.babelrc.js')
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{from: path.resolve('assets', 'images'), to: 'images'}],
    }),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: path.resolve('src', 'index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  }
};

export default config;
