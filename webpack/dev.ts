const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
import { Configuration } from 'webpack';

const config: Configuration = {
  devServer: {
    hot: true,
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    open: true,
    devMiddleware: {
      publicPath: '/'
    }
  },
  plugins: [new ReactRefreshWebpackPlugin()]
};

export default config;
