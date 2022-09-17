import TerserJSPlugin from 'terser-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
import { Configuration } from 'webpack';

const smp = new SpeedMeasurePlugin();

const config: Configuration = {
  // minify
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin({})]
  },
  // plugin - clean webpack
  plugins: [new CleanWebpackPlugin()],
  // performance 힌트
  performance: {
    hints: 'warning',
    // 500 KB
    maxEntrypointSize: 512000,
    // 500 KB
    maxAssetSize: 512000
  }
};

export default smp.wrap(config);
